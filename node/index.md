---
layout: default
title: "Node integration"
---


## Installation

If you want to integrate SassDoc in a build process but do not use [Grunt][grunt], [Gulp][gulp] or [Broccoli][broccoli], you can still use SassDoc with nothing but Node.

{% highlight sh %}
npm install sassdoc --save
{% endhighlight %}

## Using raw data

If you are not interested in generating the documentation but only want to access the raw data, it is as easy as using the `parse` method accepting a folder (of Sass/SCSS files) and returning a promise yielding documented items.

It's up to you to do whatever you want with this!

{% highlight js %}
var sassdoc = require('sassdoc');

sassdoc.parse(__dirname + '/your-sass-folder')
  .then(function (data) {
    console.log(data);
  });
{% endhighlight %}

## Generating documentation

Or if you want to use SassDoc at its best and generate the whole documentation from Node, you can use the default function.

{% highlight js %}
var sassdoc = require('sassdoc');

sassdoc(source)
  .then(function () {
    console.log('Your documentation has been generated!');
  }, function (err) {
    console.error(err);
  });
{% endhighlight %}

If you want to [configure][configuration] the destination directory, you can pass a custom `dest` in the configuration object.

## Synopsis

Both `sassdoc` and `sassdoc.parse` functions have the same synopsis:

* `@param {String} source` path to source or [glob string/array](#about-glob);
* `@param {Object} [configuration]` optional [configuration] object;
* `@return {Promise}`.

## Streaming

I lied to you in the [Synopsis](#synopsis) part. There is one more way you can use these functions; if you ommit the `source` argument, you'll get a [transform stream][repo_through2], able to handle [vinyl files][repo_vinyl]. You can easily use it with [vinyl-fs][repo_vinyl_fs].

{% highlight js %}
var vfs = require('vinyl-fs');
var sassdoc = require('sassdoc');

// Dump documentation in a directory.
vfs.src(source)
  .pipe(someFilter())
  .pipe(sassdoc());

// Get the raw data.
vfs.src(source)
  .pipe(sassdoc.parse())
  .on('data', function (data) {
    console.log(data);
  });
{% endhighlight %}

<p class="note  note--info">
  <strong>Note:</strong> that's why you don't need a plugin to use SassDoc with <a href="{{ site.data.routes.gulp }}">Gulp</a>!
</p>

## About glob

The `source` parameter above can be a simple source directory, but also
a [glob expression](https://github.com/isaacs/node-glob#glob-primer) or even array.

{% highlight js %}
sassdoc(['scss/**/*.scss', '!scss/vendor/*.scss'], ...args);
sassdoc('scss/**/*.{sass,scss}', ...args);
sassdoc('scss/**/*.s[ac]ss', ...args);
sassdoc('scss/**/*.s?ss', ...args);
{% endhighlight %}

{% include routes.html %}
