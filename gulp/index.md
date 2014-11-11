---
layout: default
title: "Gulp integration"
---

This is a [Gulp friendly](https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md#about-streams)
plugin, not using the benefits of streams.  
Its goal is to make SassDoc integration in your Gulp workflow easier.


## Getting Started

If you haven't used [gulp](http://gulpjs.com) before, be sure to check out the
[Getting Started] guide, as it explains how to create a
[Gulpfile](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started)
as well as install and use Gulp plugins.
Once you're familiar with that process, install this plugin with this command:

{% highlight sh %}
npm install --save-dev gulp-sassdoc
{% endhighlight %}


## Documentation

See the [Gulpfile](https://github.com/sassdoc/gulp-sassdoc/blob/master/Gulpfile.js) in the repository for a full example.


## SassDoc task

Run this task with the `gulp sassdoc` command.


## Options

Any specified option will be passed through directly to SassDoc, thus you can
specify any option that SassDoc supports.
Refer to [Customising the view](/customising-the-view/) for a list of supported options.


#### verbose

Type: `Boolean`  
Default: `false`

Whether to enable SassDoc own logger or not.


#### config

Type: `String`  
Default: `null`

Path to a view configuration file.


#### display.access

Type: `Array`  
Default: `['public', 'private']`

Access levels that should be displayed.


#### display.alias

Type: `Boolean`  
Default: `false`

Enable/disable display of alias items.


#### display.watermark

Type: `Boolean`  
Default: `true`

Enable/disable display of SassDoc watermark in footer.


#### package

Type: `String | Object`  
Default: `null`

Pass your project informations to the generated view.
Either a path to your `package.json` or an object.

Following keys will be looked for:
`title`
`name`
`version`
`license`
`homepage`
`description`


#### theme


Type: `String`  
Default: `'default'`  
Since: `sassdoc@1.2.0`

Name of a custom theme, either a published package or a local one.


#### groups

Type: `Object`  
Default: `{ 'undefined': 'Ungrouped' }`  
Since: `sassdoc@1.2.0`

Give friendly names to your groups, if any.


#### basePath

Type: `String`  
Default: `null`  
Since: `sassdoc@1.2.0`

An URL or a path which will be transformed in a link to the source file.


#### force

Type: `Boolean`  
Default: `false`  
Since: `sassdoc@1.10.0`

Whether to force wipe if the destination folder is not empty.


#### interactive

Type: `Boolean`  
Default: `true`  
Since: `sassdoc@1.10.0`

Whether the session is interactive.


<p class="note note--info">
  Provided you know what your doing and you've checked your paths before,
  you can disable the destination folder check and prompts by passing:
  <code>force: true, interactive: false</code> to your config.
</p>

<p class="note note--info">
  <strong>Heads up</strong>: If a config file is passed
and found, its options will prevail over defaults. Additional options passed to
the Grunt task, will complement it but not override it.
You should really manage your options in one place.
</p>

<p class="note note--info">
  <strong>Heads up</strong>: Options default values will be removed in version
  <code>2.0.0</code> of the plugin to transparently follow SassDoc core ones.
</p>


## Config examples

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
