import { im, furl } from './utils'
import { themes } from './themes'
import { sampleDir } from './sample'
import { exec } from 'mz/child_process'
import sassdoc from 'sassdoc'
import screenshot from './screenshot'

const previewDir = 'theme-gallery/preview'
const thumbDir = 'theme-gallery/thumbs'

directory(previewDir)
directory(thumbDir)

themes.forEach(theme => {
  const preview = `${previewDir}/${theme.shortName}`
  const thumb = `${thumbDir}/${theme.shortName}.png`

  task(preview, [sampleDir, theme.dir, previewDir], async () => {
    im`Compiling ${theme.shortName} theme in ${preview}.`
    console.log()

    await sassdoc(sampleDir, {
      dest: preview,
      package: theme.package,
      theme: theme.dir,
      verbose: true,
    })

    console.log()
  })

  task(thumb, [preview, thumbDir, 'screenshot'], async () => {
    im`Taking a screenshot of ${preview} in ${thumb}.`

    await screenshot({
      url: furl(`${preview}/index.html`),
      dest: thumb,
      width: 1024,
      height: 768
    })

    await exec(`mogrify -resize 256x192 '${thumb}'`)
  })

  task(`theme-gallery-${theme.shortName}`, [preview, thumb])
})

task('theme-gallery', themes.map(x => `theme-gallery-${x.shortName}`))
