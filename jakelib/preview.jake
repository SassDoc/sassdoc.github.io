import { im, furl } from './utils'
import { themes } from './themes'
import { sampleDir } from './sample'
import fse from 'fs-extra-promise'
import sassdoc from 'sassdoc'
import screenshot from './screenshot'

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

  await screenshot({
    url: furl('_preview/index.html'),
    dest: preview,
    width: 1200,
    height: 675
  })
})

task('preview', [preview])
