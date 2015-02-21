const { im } = require('./utils')
const filter = require('through2-filter')
const fs = require('fs')
const map = require('through2-map')
const promisePipe = require('promisepipe')
const request = require('request')
const split = require('split')

const repo = 'https://raw.githubusercontent.com/SassDoc/sassdoc/master'

// Filter stream chunks with a count.
const filterCount = (f, i=0) =>
  filter(line => f(line, ++i))

// Turn GitHub code blocks in Liquide code blocks.
const convertCodeBlocks = line =>
  line
    .replace(/^( *)```([a-z0-9]+)$/, '$1{% highlight $2 %}')
    .replace(/^( *)```$/, '$1{% endhighlight %}')

function page(name, remote, header) {
  task(name, async () => {
    const local = `${name}/index.md`
    const url = `${repo}/${remote}`
    const output = fs.createWriteStream(local)

    im`Retrieving ${remote} from main repository to ${local}.`

    output.write(header)

    await promisePipe(
      request(url),
      split(/(\n)/),
      filterCount((line, i) => i > 4),
      map({ wantStrings: true }, convertCodeBlocks),
      output
    )
  })
}

page(
  'changelog',
  'CHANGELOG.md',
  '---\nlayout: default\ntitle: "Changelog"\n---\n\n'
)

page(
  'upgrading',
  'UPGRADE-2.0.md',
  '---\nlayout: default\ntitle: "Upgrade from 1.0 to 2.0"\n---\n\n'
)
