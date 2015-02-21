const chalk = require('chalk')

const key = name =>
  `${chalk.red('*')} ${chalk.green(name)}`

const title = (text, char='-') =>
  `${chalk.blue(text)}\n${chalk.yellow(char.repeat(text.length))}`

const code = text => chalk.green(text)

task('help', () => {
  console.log(`
${title('sassdoc.com build script', '=')}

Execute ${chalk.green('make <task>...')} to execute one or multiple tasks.

${title('General')}

${key('help')}                  Show this help.
${key('preview')}               Render the preview image ${code('assets/images/preview-image.png')}.
${key('sample')}                Fetch some SCSS sample in ${code('_sample')}.
${key('webshot')}               Download Webshot.

${title('Pages')}

${key('changelog')}             Fetch the changelog from GitHub repository.
${key('upgrading')}             Fetch the upgrading page from GitHub repository.

${title('Themes')}

${key('themes')}                Compile ${code('_data/themes.yml')} (package data for each
                        theme shown on the website).
${key('theme-<name>')}          Download given theme (e.g. ${code('make theme-vulcan')}).

${title('Gallery')}

${key('gallery')}               Render all gallery images (${code('assets/images/gallery/*')}).
${key('gallery-<name>')}        Render a specific gallery image (e.g. ${code('make gallery-sassysort')}).

${title('Theme gallery')}

${key('theme-gallery')}         Render all the themes and their preview images
                        in ${code('theme-gallery')}.
${key('theme-gallery-<name>')}  Render a specific themes (e.g. ${code('make theme-gallery-neat')}).
`)
})
