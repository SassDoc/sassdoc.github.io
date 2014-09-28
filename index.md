---
layout: default
title: "Like JSDoc for your Sass files"
---

<a class="build-status" href="https://travis-ci.org/SassDoc/sassdoc" target="_blank"><img src="https://travis-ci.org/SassDoc/sassdoc.svg?branch=master" alt="Build Status" /></a>

[![NPM](https://nodei.co/npm/sassdoc.png?downloads=true)](https://nodei.co/npm/sassdoc/)

SassDoc is to Sass what JSDoc is to JavaScript: a documentation system to build pretty and powerful docs in the blink of an eye. Among other things, SassDoc is:

* usable out of the box;
* highly customisable;
* blazingly fast;
* fully themable;
* integrated with Grunt/Gulp/Broccoli or directly Node.

![SassDoc](/assets/images/preview-image.png)

## How does it work?

[SassDoc](http://github.com/sassdoc/sassdoc) parses your source folder to grab documentation-specific comments. From there, it builds a data tree, that gets [enhanced](http://github.com/sassdoc/sassdoc-indexer) and [filtered](http://github.com/sassdoc/sassdoc-filter) before being passed to the [view](http://github.com/sassdoc/sassdoc-theme-light). So you end up with a fully styled HTML document located at your destination folder.

## Usage

### Command line

#### Install

```sh
npm install -g sassdoc
```

#### Generate Documentation

```sh
sassdoc <src> <dest> [options]
```

**Arguments:**

1. `<src>` Path to your Sass folder.
1. `<dest>` Path to the destination folder.

**Options:**

* `--version`: Show version.
* `-h, --help`: Bring help.
* `-v, --verbose`: Run in verbose mode.
* `-c, --config`: Path to JSON file containing variables to be passed to the view.
* `-t, --theme`: Theme to be required. It will override the configuration value.
* `--sass-convert`: Perform a Sass to SCSS syntax conversion prior to run SassDoc.
* `--no-update-notifier`: Do not run the update notifier check.

### Node

#### Install

```shell
npm install sassdoc --save
```

#### Use The Raw Data

```js
var sassdoc = require('sassdoc');

sassdoc.parse(__dirname + '/sass').then(function (items) {
  console.log(items);
})
```

#### Generate Documentation

```js
var config = {
  display: {
    access: ['public', 'private'],
    alias: false,
    watermark: true,
  },

  package: 'path/to/package.json', // Defaults to `./package.json`
  theme: 'theme-name', // Defaults to `default`
};

var sassdoc = require('sassdoc');
sassdoc.documentize(source, dest, config);
```

### Grunt, Gulp, Broccoli

See [grunt-sassdoc](https://github.com/SassDoc/grunt-sassdoc),
[gulp-sassdoc](https://github.com/SassDoc/gulp-sassdoc),
[broccoli-sassdoc](https://github.com/SassDoc/broccoli-sassdoc).

## Example

{% highlight scss %}
/**
 * Adds `$value` at `$index` in `$list`.
 *
 * @author Hugo Giraudel
 *
 * @requires {function} is-true
 *
 * @param {List}   $list  - list to update
 * @param {Number} $index - index to add
 * @param {*}      $value - value to add
 *
 * @throws List index $index is not a number for `insert-nth`.
 *
 * @return {List | Null}
 */

@function insert-nth($list, $index, $value) {
  // ...
}

/**
 * Defines whether the lib should support legacy browsers (e.g. `IE 8`).
 *
 * @since 1.3.37
 *
 * @todo Nothing. It's awesome.
 *
 * @link https://github.com/SassDoc/sassdoc SassDoc
 *
 * @type Bool
 */
$legacy-support: true !global;
{% endhighlight %}
