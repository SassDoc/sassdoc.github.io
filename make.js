// Dependencies {{{

const CombinedStream = require('combined-stream')
const es = require('event-stream')
const exec = require('mz/child_process').exec
const filter = require('through2-filter')
const fs = require('mz/fs')
const fse = require('fs-extra-promise')
const path = require('path')
const promisePipe = require('promisepipe')
const readline = require('readline')
const request = require('request')
const sassdoc = require('sassdoc')
const screenshot = require('atom-screenshot')
const split = require('split')
const yaml = require('js-yaml')
const zip = require('array-zip')

// }}}

// Helpers {{{

const repoUrl = 'https://raw.githubusercontent.com/SassDoc/sassdoc/master'

// Say what I'm doing.
function im(...args) {
  console.log()
  console.log(...args)
  console.log()
}

// Get a file as URL.
const furl = file => `file://${path.resolve(file)}`

// Return a callback to write given file.
const writeFile = (file, options) =>
  buffer => fs.writeFile(file, buffer, options)

// Filter stream chunks with a count.
const filterCount = (f, i=0) =>
  filter(line => f(line, ++i))

// Read a YAML file.
const yamlf = async file =>
  yaml.safeLoad(await fs.readFile(file))

// Tasks container.
const t = {}

// }}}

// Changelog {{{

t.changelog = async () => {
  const changelog = 'changelog/index.md'
  const url = `${repoUrl}/CHANGELOG.md`
  const header = '---\nlayout: default\ntitle: "Changelog"\n---\n\n'

  im(`Retrieving changelog from main repository to \`${changelog}\`.`)

  const output = fs.createWriteStream(changelog)

  output.write(header)

  await promisePipe(
    request(url),
    split(/(\n)/),
    filterCount((line, i) => i > 2),
    output
  )
}

// }}}

// Preview {{{

t.preview = async () => {
  const theme = 'node_modules/sassdoc-theme-default'
  const preview = 'assets/images/preview-image.png'

  im('Compiling `default` theme in `.preview`.')

  await sassdoc(`${theme}/scss`, {
    dest: '.preview',
    package: `${theme}/package.json`,
    verbose: true,
  })

  im(`Taking a screenshot in \`${preview}\`.`)

  await screenshot({
    url: furl('.preview/index.html'),
    width: 1200,
    height: 675,
  })
    .then(writeFile(preview))

  await fse.remove('.preview')
}

// }}}

// Themes {{{

const themes = ['default', 'vulcan']
const themeDirs = themes.map(x => `node_modules/sassdoc-theme-${x}`)
const themePackages = themeDirs.map(x => `${x}/package.json`)

const themeGallery = 'theme-gallery'
const sampleDir = `${themeGallery}/sample`

// Sample {{{

t.sample = async () => {
  if (!await fs.exists(sampleDir)) {
    im('Cloning default theme to get sample SCSS files.')
    await exec(`git clone '${defaultTheme}' '${sampleDir}-git'`)
    await fs.rename(`${sampleDir}-git/scss/utils`, sampleDir)
    await fse.remove(`${sampleDir}-git`)
  }
}

// }}}

// Gallery {{{

t['theme-gallery'] = async () => {
  // Ensure sample directory exists.
  await t.sample()

  const previewDir = `${themeGallery}/preview`
  const thumbDir = `${themeGallery}/thumbs`
  const defaultTheme = 'https://github.com/SassDoc/sassdoc-theme-default'

  await Promise.all([previewDir, thumbDir].map(fse.mkdirs))

  for (let [theme, themePackage] of zip(themes, themePackages)) {
    const preview = `${previewDir}/${theme}`
    const thumb = `${thumbDir}/${theme}.png`

    // im(`Retrieving \`${theme}\` theme package.`)
    // await exec(`npm i ${theme}`)

    im(`Compiling \`${theme}\` theme in \`${preview}\`.`)

    await sassdoc(sampleDir, {
      dest: preview,
      package: themePackage,
      theme,
      verbose: true,
    })

    im(`Taking a screenshot of \`${theme}\` theme in \`${thumb}\`.`)

    await screenshot({
      url: furl `${preview}/index.html`,
      width: 1024,
      height: 768,
      dest: thumb,
    })

    await exec(`mogrify -resize 256x192 '${thumb}'`)
  }
}

// }}}

t.themes = async () => {
  const file = '_data/themes.yml'
  const output = fs.createWriteStream(file)
  const combined = CombinedStream.create()

  im(`Generating \`${file}\`.`)

  for (let [theme, themePackage] of zip(themes, themePackages)) {
    combined.append(`${theme}: `)
    combined.append(fs.createReadStream(themePackage))
  }

  await promisePipe(combined, output)
}

// }}}

// Gallery {{{

t.gallery = async () => {
  const gallery = await yamlf('_data/gallery.yml')
  const galleryDir = 'assets/images/gallery'

  const images = gallery
    .map(x => x.image)
    .map(x => `${galleryDir}/${x}`)

  // Ensure directory exists.
  await fse.mkdirs(galleryDir)

  await Promise.all(
    gallery
      .map(async x => {
        const file = `${galleryDir}/${x.image}`

        await screenshot({
          url: furl('.preview/index.html'),
          width: 1440,
          height: 900,
        })
          .then(writeFile(file))

        await exec(`mogrify -resize 900x '${file}'`)
      })
  )
}

// }}}

// Makefile {{{

t.makefile = async () => {
  im('Generating makefile.')

  await fs.writeFile(
    'Makefile',
    [
      `${Object.keys(t).join(' ')}: force`,
      '\tnpm run make $@\n',
      'force:\n',
    ].join('\n')
  )
}

// }}}

// Execution {{{

async () => {
  const targets = process.argv.slice(2)

  // Show existing targets.
  if (!targets.length) {
    console.error('Please specify a target. Available targets:')
    Object.keys(t).map(x => `  ${x}`).forEach(console.error)
    process.exit(1)
  }

  // Show unknown targets and exit if any.
  targets
    .filter(target => !(target in t))
    .map(target => console.error(`Unknown target \`${target}\`.`))
    .forEach(() => process.exit(1))

  const throwNextTick = err =>
    setImmediate(() => { throw err })

  // Call all targets, wait promises.
  await Promise.all(
    targets
      .map(target => t[target]())
      .filter(p => p instanceof Promise)
      .map(p => p.catch(throwNextTick))
  )

  // Close screenshot service if needed.
  screenshot.close()
}()

// }}}
