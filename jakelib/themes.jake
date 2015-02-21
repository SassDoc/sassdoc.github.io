const { im } = require('./utils')
const CombinedStream = require('combined-stream')
const exec = require('mz/child_process').exec
const fs = require('fs')
const promisePipe = require('promisepipe')
const themesPackage = require('../_themes/package')

export const themes = Object.keys(themesPackage.devDependencies)
  .map(name => ({
    shortName: name.replace(/^sassdoc-theme-/, ''),
    name,
    dir: `_themes/node_modules/${name}`,
    package: `_themes/node_modules/${name}/package.json`,
    version: themesPackage.devDependencies[name],
  }))

themes.forEach(theme => {
  file(theme.dir, async () => {
    im`Installing ${theme.name}.`
    await exec(`cd _themes && npm install '${theme.name}@${theme.version}'`)
  })

  file(theme.package, [theme.dir], () => {})
  task(`theme-${theme.shortName}`, [theme.dir])
})

file('_data/themes.yml', themes.map(x => x.package), async () => {
  const file = '_data/themes.yml'
  const output = fs.createWriteStream(file)
  const combined = CombinedStream.create()

  im`Generating ${file}.`

  themes.forEach(theme => {
    combined.append(`${theme.shortName}: `)
    combined.append(fs.createReadStream(theme.package))
  })

  await promisePipe(combined, output)
})

task('themes', ['_data/themes.yml'])
