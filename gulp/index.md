---
layout: default
title: "Gulp integration"
---

## Introduction

This is a [Gulp friendly](https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md#about-streams)
Its goal is to make SassDoc integration in your Gulp workflow easier.
plugin, not using the benefits of streams.

If you haven't used [gulp](http://gulpjs.com) before, be sure to check out the
[Getting Started] guide, as it explains how to create a
[Gulpfile](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started)
as well as install and use Gulp plugins.
Once you're familiar with that process, install this plugin with this command:

{% highlight sh %}
npm install --save-dev gulp-sassdoc
{% endhighlight %}

Run the task:

{% highlight sh %}
gulp sassdoc
{% endhighlight %}

## Options

Any specified option will be passed through directly to SassDoc, thus you can
specify any option that SassDoc supports. Refer to:

* [Getting started][command_line] for CLI options;
* [Configuration][configuration] for SassDoc options;
* [Customising the view][view] for default theme options.

<p class="note note--info">
  <strong>Heads up:</strong> if a config file is passed
and found, its options will prevail over defaults. Additional options passed to
the Grunt task, will complement it but not override it.
You should really manage your options in one place.
</p>

## Examples

See the [Gulpfile](https://github.com/sassdoc/gulp-sassdoc/blob/master/Gulpfile.js) in the repository for a full example.

{% highlight js %}
var gulp = require('gulp');
var sassdoc = require('gulp-sassdoc');

// Bare minimum example, using defaults.
gulp.task('sassdoc', function () {
  return gulp
    .src('path/to/sass')
    .pipe(sassdoc({
      'dest': 'path/to/docs'
    }));
});
{% endhighlight %}

{% highlight js %}
// Example with external view configuration file.
gulp.task('sassdoc', function () {
  return gulp
    .src('path/to/sass')
    .pipe(sassdoc({
      'dest': 'path/to/docs',
      'config': 'path/to/view.json'
    }));
});
{% endhighlight %}

{% highlight js %}
// Example with passed in options.
// Tip: you don't need to pass every options,
// just override the one you need.
gulp.task('sassdoc', function () {
  var options = {
      'dest': 'test/docs',
      'verbose': true,
      'display': {
        'access': ['public', 'private'],
        'alias': true,
        'watermark': true
      },
      'groups': {
        'undefined': 'Ungrouped',
        'foo': 'Foo group',
        'bar': 'Bar group'
      },
      'package': './package.json',
      'theme': 'default',
      'basePath': 'https://github.com/SassDoc/sassdoc'
    };

    return gulp
      .src('test/fixture')
      .pipe(sassdoc(options));
});
{% endhighlight %}

## Without plugin

If you don't feel like using yet another plugin, set your task yourself:

{% highlight js %}
var gulp = require('gulp');
var sassdoc = require('sassdoc');

// A custom task to compile through SassDoc API.
gulp.task('sassdoc', function () {
  var src = 'path/to/sass';
  var dest = 'path/to/docs';

  // Tip: you don't need to pass every options,
  // just override the one you need.
  var config = {
    'verbose': true,
    'display': {
      'access': ['public', 'private'],
      'alias': true,
      'watermark': true
    },
    'groups': {
      'undefined': 'Ungrouped',
      'foo': 'Foo group',
      'bar': 'Bar group'
    },
    'package': './package.json',
    'theme': 'default',
    'basePath': 'https://github.com/SassDoc/sassdoc'
  };

  // Enable verbose.
  sassdoc.logger.enabled = config['verbose'];

  // Return a Promise.
  return sassdoc.documentize(src, dest, config);
});
{% endhighlight %}

{% include routes.html %}
