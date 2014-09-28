---
layout: default
title: "Grunt integration"
---

## Getting Started

If you haven't used [grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [gruntfile](http://gruntjs.com/getting-started) as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

{% highlight sh %}
npm install --save-dev grunt-sassdoc
{% endhighlight %}

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

{% highlight js %}
grunt.loadNpmTasks('grunt-sassdoc');
{% endhighlight %}

<p class="note  note--info"><strong>Tip</strong>: the <a href="https://github.com/sindresorhus/load-grunt-tasks">load-grunt-tasks</a> module makes it easier to load multiple grunt tasks.</p>

## Documentation

See the [Gruntfile](https://github.com/sassdoc/grunt-sassdoc/blob/master/Gruntfile.js) in the repository for a full example.

## SassDoc task

Run this task with the `grunt sassdoc` command.

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

## Options

Any specified option will be passed through directly to SassDoc, thus you can specify any option that SassDoc supports. Refer to [Customising the view](/customising-the-view/) for a list of supported options.

<p class="note  note--info"><strong>Heads up</strong>: If a config file is passed and found, its options will prevail over defaults.
Additional options passed to the Grunt task, will complement it but not override it.
You should really manage your options in one place.</p>

## Config examples

{% highlight js %}
// Bare minimum example.
grunt.initConfig({
  sassdoc: {
    default: {
      src: 'path/to/sass',
      dest: 'path/to/docs'
    }
  }
});
{% endhighlight %}

{% highlight js %}
// Example with external view configuration file.
grunt.initConfig({
  sassdoc: {
    default: {
      src: 'path/to/sass',
      dest: 'path/to/docs',
      options: {
        config: 'path/to/view.json'
      }
    }
  }
});
{% endhighlight %}

{% highlight js %}
// Example with passed in options.
// Tip: you're not required to to pass every options,
// just override the one you need.
grunt.initConfig({
  sassdoc: {
    default: {
      src: 'path/to/sass',
      dest: 'path/to/docs',
      options: {
        display: {
          access: ['public', 'private'],
          alias: true,
          watermark: true
        },
        package: './package.json',
        theme: 'sassdoc-theme-dark',
        groups: {
          'slug': 'Title',
          'helpers': 'Helpers',
          'hacks': 'Dirty Hacks & Fixes',
          'undefined': 'Ungrouped'
        },
        basePath: 'https://github.com/SassDoc/sassdoc'
      }
    }
  }
});
{% endhighlight %}


## Events

This task will emit a `start` event when compilation begins, and a `done` event on completion.
This is useful if you would like simple notifications about the compile process.
**The start and done events are not intended for replacing the standard Grunt API for configuring and running tasks.**
Here is a simple example using them:

{% highlight js %}
// Examples using start and done events.
grunt.event.on('sassdoc.start', function (target, src, dest) {
  grunt.log.writeln(target + ': compiling ' + src + ' to ' + dest);
});

grunt.event.on('sassdoc.done', function (target, src, dest) {
  grunt.log.writeln(target + ': ' + src + ' compiled to ' + dest);
});
{% endhighlight %}
