// Dependencies {{{
// ================

const CombinedStream = require('combined-stream')
const es = require('event-stream')
const exec = require('mz/child_process').exec
const filter = require('through2-filter')
const fs = require('mz/fs')
const fse = require('fs-extra-promise')
const map = require('through2-map')
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
// ===========

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

const shot = options =>
  screenshot({
    ...options,
    css: '::-webkit-scrollbar { display: none; }',
  })

// Tasks container.
const t = {}

// }}}

// Pages {{{
// =========

// Turn GitHub code blocks in Liquide code blocks.
const convertCodeBlocks = line =>
  line
    .replace(/^( *)```([a-z0-9]+)$/, '$1{% highlight $2 %}')
    .replace(/^( *)```$/, '$1{% endhighlight %}')

async function page(local, remote, header) {
  im(`Retrieving \`${remote}\` from main repository to \`${local}\`.`)

  const url = `${repoUrl}/${remote}`
  const output = fs.createWriteStream(local)

  output.write(header)

  await promisePipe(
    request(url),
    split(/(\n)/),
    filterCount((line, i) => i > 4),
    map({ wantStrings: true }, convertCodeBlocks),
    output
  )
}

t.changelog = () =>
  page(
    'changelog/index.md',
    'CHANGELOG.md',
    '---\nlayout: default\ntitle: "Changelog"\n---\n\n'
  )

t.upgrading = () =>
  page(
    'upgrading/index.md',
    'UPGRADE-2.0.md',
    '---\nlayout: default\ntitle: "Upgrade from 1.0 to 2.0"\n---\n\n'
  )

// }}}

// Themes {{{
// ==========

const themes = ['default', 'vulcan', 'neat']
const themeDirs = themes.map(x => `node_modules/sassdoc-theme-${x}`)
const themePackages = themeDirs.map(x => `${x}/package.json`)

const themeGallery = 'theme-gallery'
const sampleDir = `${themeGallery}/sample`
const defaultTheme = 'https://github.com/SassDoc/sassdoc-theme-default'

// Sample {{{
// ----------

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
// -----------

t['theme-gallery'] = async () => {
  // Ensure sample directory exists.
  await t.sample()

  const previewDir = `${themeGallery}/preview`
  const thumbDir = `${themeGallery}/thumbs`

  await Promise.all([previewDir, thumbDir].map(x => fse.mkdirs(x)))

  for (let theme of process.env.THEME ? [process.env.THEME] : themes) {
    const themePackage = themePackages[themes.indexOf(theme)]
    const preview = `${previewDir}/${theme}`
    const thumb = `${thumbDir}/${theme}.png`

    im(`Compiling \`${theme}\` theme in \`${preview}\`.`)

    await sassdoc(sampleDir, {
      dest: preview,
      package: themePackage,
      theme,
      verbose: true,
    })

    im(`Taking a screenshot of \`${theme}\` theme in \`${thumb}\`.`)

    await shot({
      url: furl(`${preview}/index.html`),
      width: 1024,
      height: 768,
    })
      .then(writeFile(thumb))

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

// Preview {{{
// ===========

t.preview = async () => {
  // Ensure sample directory exists.
  await t.sample()

  const preview = 'assets/images/preview-image.png'

  im('Compiling `default` theme in `.preview`.')

  await sassdoc(sampleDir, {
    dest: '.preview',
    package: `node_modules/sassdoc-theme-default/package.json`,
    verbose: true,
  })

  im(`Taking a screenshot in \`${preview}\`.`)

  await shot({
    url: furl('.preview/index.html'),
    width: 1200,
    height: 675,
  })
    .then(writeFile(preview))

  await fse.remove('.preview')
}

// }}}

// Gallery {{{
// ===========

t.gallery = async () => {
  const gallery = await yamlf('_data/gallery.yml')
  const galleryDir = 'assets/images/gallery'

  const images = gallery
    .map(x => x.image)
    .map(x => `${galleryDir}/${x}`)

  // Ensure directory exists.
  await fse.mkdirs(galleryDir)

  const filter = !process.env.SITE
    ? () => true
    : x => x.image === `${process.env.SITE}.png`

  await Promise.all(
    gallery
      .filter(filter)
      .map(async x => {
        const file = `${galleryDir}/${x.image}`

        await shot({
          url: x.url,
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
// ============

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
// =============

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
