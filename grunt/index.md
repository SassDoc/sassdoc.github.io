---
layout: default
title: "Grunt integration"
---

## Introduction

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how
to create a [Gruntfile](http://gruntjs.com/getting-started) as well as install
and use grunt plugins. Once you're familiar with that process, install this
plugin with this command:

{% highlight sh %}
npm install --save-dev grunt-sassdoc
{% endhighlight %}

Once the plugin has been installed, it may be enabled inside your Gruntfile with
this line of JavaScript:

{% highlight js %}
grunt.loadNpmTasks('grunt-sassdoc');
{% endhighlight %}

<p class="note  note--info">
  <strong>Tip</strong>:
  the <a href="https://github.com/sindresorhus/load-grunt-tasks">load-grunt-tasks</a>
  module makes it easier to load multiple grunt tasks.
</p>

Run the task:

{% highlight sh %}
grunt sassdoc
{% endhighlight %}

Task targets, files and options may be specified according to the Grunt
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.


## Options

Any specified option will be passed through directly to SassDoc, thus you can
specify any option that SassDoc supports. Refer to:

* [Getting started][command_line] for CLI options;
* [Configuration][configuration] for SassDoc options;
* [Customising the view][view] for default theme options.

<p class="note  note--info">
  <strong>Heads up:</strong> if options or a config file are passed it will prevail
over `.sassdocrc` if any. You should really manage your options in one place.
</p>

## Examples

See the [Gruntfile](https://github.com/sassdoc/grunt-sassdoc/blob/master/Gruntfile.js)
in the repository for full examples.

### Bare minimum example.

{% highlight js %}
grunt.initConfig({
  sassdoc: {
    default: {
      src: 'path/to/source',
    },
  },
});
{% endhighlight %}



### Example with an external configuration file.

{% highlight js %}
grunt.initConfig({
  sassdoc: {
    default: {
      src: 'path/to/source',
      options: {
        config: 'path/to/config.json',
      },
    },
  },
});
{% endhighlight %}



### Example with some options passed in.

{% highlight js %}
// Tip: you're not required to pass every options,
// just set the one you need.
grunt.initConfig({
  sassdoc: {
    default: {
      src: 'path/to/source',
      options: {
        dest: 'path/to/docs',
        display: {
          access: ['public', 'private'],
          alias: true,
          watermark: true,
        },
        groups: {
          slug: 'Title',
          helpers: 'Helpers',
          hacks: 'Dirty Hacks & Fixes',
          'undefined': 'Ungrouped',
        },
        basePath: 'https://github.com/SassDoc/grunt-sassdoc',
      },
    },
  },
});
{% endhighlight %}



## Events

This task will emit a `start` event when compilation begins, and a `done` event on completion.
This is useful if you would like simple notifications about the compile process.

<p class="note  note--danger"><strong>Caution!</strong> The <code>start</code> and <code>done</code> events are not intended for replacing the standard Grunt API for configuring and running tasks.</p>

Here is a simple example using them:

{% highlight js %}
// Examples using start and done events.
grunt.event.on('sassdoc.start', function (target, src) {
  grunt.log.writeln(target + ': compiling ' + src);
});

grunt.event.on('sassdoc.done', function (target, src) {
  grunt.log.writeln(target + ': done');
});
{% endhighlight %}



{% include routes.html %}
