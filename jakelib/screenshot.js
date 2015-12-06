import denodeify from 'es6-denodeify'
import screenshot from 'electron-screenshot-service'
import fs from 'fs'

const writeFile = denodeify(Promise)(fs.writeFile)

jake.addListener('complete', () => screenshot.close())

export default opts =>
  screenshot(opts)
    .then(img => writeFile(opts.dest, img.data))
