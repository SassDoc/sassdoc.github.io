import chalk from 'chalk'
import fs from 'mz/fs'
import path from 'path'
import jsYaml from 'js-yaml'

const chevron = '»'

export const zip = (...arrays) =>
  arrays[0].map((_, i) =>
    arrays.map(array => array[i])
  )

const decorateValues = values =>
  values.map(x => chalk.green(x))

// Say what I'm doing (template string).
export function im(strings, ...values) {
  const [xs, x] = [strings.slice(0, -1), strings.slice(-1)]
  const parts = [].concat(...zip(xs, decorateValues(values)), x)
  console.log(chalk.green(chevron), parts.join(''))
}

// Convert a file to absolute `file://` URL.
export const furl = file => `file://${path.resolve(file)}`

export const yaml = file =>
  jsYaml.safeLoad(fs.readFileSync(file))
