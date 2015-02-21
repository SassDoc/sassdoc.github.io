const { im, yaml } = require('./utils')
const exec = require('mz/child_process').exec

const gallery = yaml('_data/gallery.yml')
  .map(x => { x.name = x.image.replace(/\..*$/, ''); return x })

const galleryDir = 'assets/images/gallery'

directory(galleryDir)

gallery.forEach(item => {
  const image = `${galleryDir}/${item.image}`

  file(image, [galleryDir, 'webshot'], async () => {
    im`Rendering ${item.url} in ${image}.`

    await require('./webshot-promise')(item.url, image, {
      screenSize: { width: 1440, height: 900 },
      defaultWhiteBackground: true,
    })

    await exec(`mogrify -resize 900x '${image}'`)
  })

  task(`gallery-${item.name}`, [image])
})

task('gallery', gallery.map(x => `gallery-${x.name}`))
