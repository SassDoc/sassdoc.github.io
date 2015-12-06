const exec = require('mz/child_process').exec
const name = 'electron-screenshot-service'

file(`node_modules/${name}`, () => exec(`npm install ${name}`))
task('screenshot', [`node_modules/${name}`])
