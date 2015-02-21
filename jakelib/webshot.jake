const exec = require('mz/child_process').exec

file('node_modules/webshot', () => exec('npm install webshot'))
task('webshot', ['node_modules/webshot'])
