---
layout: default
title: "Like JSDoc for your Sass files"
---

<a class="build-status" href="https://travis-ci.org/SassDoc/sassdoc" target="_blank"><img src="https://travis-ci.org/SassDoc/sassdoc.svg?branch=master" alt="Build Status" /></a>

<a class="npm-badge" href="https://nodei.co/npm/sassdoc/"><img src="https://nodei.co/npm/sassdoc.png?downloads=true" alt="NPM SassDoc" /></a>

SassDoc is to Sass what JSDoc is to JavaScript: a documentation system to build pretty and powerful docs in the blink of an eye. Among other things, SassDoc is:

* usable out of the box;
* highly customisable;
* blazingly fast;
* fully themable;
* integrated with Grunt/Gulp/Broccoli or directly Node.

## How does it work?

[SassDoc](http://github.com/sassdoc/sassdoc) parses your source folder to grab documentation-specific comments. From there, it builds a data tree, that gets [enhanced](http://github.com/sassdoc/sassdoc-indexer) and [filtered](http://github.com/sassdoc/sassdoc-filter) before being passed to the [view](http://github.com/sassdoc/sassdoc-theme-light). So you end up with a fully styled HTML document located at your destination folder.

It would pretty much look like this:

![SassDoc](/assets/images/preview-image.png)

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
