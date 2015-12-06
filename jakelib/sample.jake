import { im, asyncTask } from './utils'
import { themes } from './themes'
import exec from 'mz/child_process'
import fs from 'mz/fs'
import fse from 'fs-extra-promise'

const defaultTheme = 'https://github.com/SassDoc/sassdoc-theme-default'
export const sampleDir = `_sample`

file(sampleDir, async () => {
  im`Cloning ${defaultTheme}.`
  await exec(`git clone '${defaultTheme}' '${sampleDir}-git'`)

  im`Copying ${'scss/utils'} from theme to ${sampleDir}.`
  await fs.rename(`${sampleDir}-git/scss/utils`, sampleDir)
  await fse.remove(`${sampleDir}-git`)
})

task('sample', [sampleDir])
