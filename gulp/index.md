---
layout: default
title: "Gulp integration"
---

[Gulp]: http://gulpjs.com
[gulp-sassdoc]: https://github.com/SassDoc/gulp-sassdoc
[Getting started]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
[Vinyl]: https://github.com/wearefractal/vinyl

## Introduction

Starting from version `2.0` and higher SassDoc is able to integrates directly in
your [Gulp] pipelines without any plugin. In such the [gulp-sassdoc] plugin has been deprecated.

If you haven't used [Gulp] before, be sure to check out the [Getting started] guide,
as it explains how to create a Gulpfile as well as install and use Gulp plugins.

## Examples

### Bare minimum example, using defaults or `.sassdocrc`.

{% highlight sh %}
npm install --save-dev gulp sassdoc
{% endhighlight %}

{% highlight js %}
var gulp = require('gulp');
var sassdoc = require('sassdoc');

gulp.task('sassdoc', function () {
  return gulp.src('path/to/source/**/*.scss')
    .pipe(sassdoc());
});
{% endhighlight %}



### Example with *some* options passed in.

{% highlight sh %}
npm install --save-dev gulp sassdoc
{% endhighlight %}

{% highlight js %}
var gulp = require('gulp');
var sassdoc = require('sassdoc');

gulp.task('sassdoc', function () {
  var options = {
    dest: 'docs',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    },
    groups: {
      'undefined': 'Ungrouped',
      foo: 'Foo group',
      bar: 'Bar group',
    },
    basePath: 'https://github.com/SassDoc/sassdoc',
  };

  return gulp.src('path/to/source/**/*.scss')
    .pipe(sassdoc(options));
});
{% endhighlight %}



### Example adding support for Sass (indented syntax) files.

{% highlight sh %}
npm install --save-dev gulp sass-convert sassdoc
{% endhighlight %}

{% highlight js %}
var gulp = require('gulp');
var converter = require('sass-convert');
var sassdoc = require('sassdoc');

gulp.task('sassdoc', function () {
  return gulp.src('path/to/source/**/*.+(sass|scss)')
    .pipe(converter({
      from: 'sass',
      to: 'scss',
    }))
    .pipe(sassdoc());
});
{% endhighlight %}



### Example of a Sassy workflow.

{% highlight sh %}
npm install --save-dev gulp sassdoc gulp-sass
{% endhighlight %}

{% highlight js %}
var gulp = require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src('path/to/source/**/*.scss')
    .pipe(sassdoc())
    .pipe(sass());
    .pipe(gulp.dest('path/to/styles'));
});
{% endhighlight %}



### Example of a non Gulp pipeline.

Acutally SassDoc is not tight to Gulp, the only requirement is it's expecting
[Vinyl] files passed trough.

{% highlight sh %}
npm install --save-dev vinyl-source-stream sassdoc
{% endhighlight %}

{% highlight js %}
var fs = require('fs');
var source = require('vinyl-source-stream');
var sassdoc = require('sassdoc');

fs.createReadStream('./file.scss')
  .pipe(source('./file.scss'))
  .pipe(sassdoc());
{% endhighlight %}
