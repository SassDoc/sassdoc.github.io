const { im, furl } = require('./utils')
const { themes } = require('./themes')
const { sampleDir } = require('./sample')
const fse = require('fs-extra-promise')
const sassdoc = require('sassdoc')

const defaultTheme = themes.find(x => x.shortName === 'default')
const preview = 'assets/images/preview-image.png'

file('_preview', [sampleDir, defaultTheme.package], async () => {
  im`Compiling ${'default'} theme in ${'_preview'}.`
  console.log()

  await sassdoc(sampleDir, {
    dest: '_preview',
    package: defaultTheme.package,
    verbose: true,
  })

  console.log()
})

file(preview, ['_preview', 'screenshot'], async () => {
  im`Taking a screenshot in ${preview}.`

  await require('./screenshot')({
    url: furl('_preview/index.html'),
    dest: preview,
    width: 1200,
    height: 675
  })
})

task('preview', [preview])
