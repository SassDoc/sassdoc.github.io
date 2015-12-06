import { im, yaml } from './utils'
import { exec } from 'mz/child_process'
import screenshot from './screenshot'

const gallery = yaml('_data/gallery.yml')
  .map(x => { x.name = x.image.replace(/\..*$/, ''); return x })

const galleryDir = 'assets/images/gallery'

directory(galleryDir)

gallery.forEach(item => {
  const image = `${galleryDir}/${item.image}`

  file(image, [galleryDir, 'screenshot'], async () => {
    im`Rendering ${item.url} in ${image}.`

    await screenshot({
      url: item.url,
      dest: image,
      width: 1440,
      height: 900
    })

    await exec(`mogrify -resize 900x '${image}'`)
  })

  task(`gallery-${item.name}`, [image])
})

task('gallery', gallery.map(x => `gallery-${x.name}`))
