import { exec } from 'mz/child_process'

const name = 'electron-screenshot-service'

file(`node_modules/${name}`, () => exec(`npm install ${name}`))
task('screenshot', [`node_modules/${name}`])
