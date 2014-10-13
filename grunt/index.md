---
layout: default
title: "Grunt integration"
---

## Getting Started

If you haven't used [grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how
to create a [gruntfile](http://gruntjs.com/getting-started) as well as install
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

<p class="note note--info">
  <strong>Tip</strong>:
  the <a href="https://github.com/sindresorhus/load-grunt-tasks">load-grunt-tasks</a>
  module makes it easier to load multiple grunt tasks.
</p>


## Documentation

See the [Gruntfile](https://github.com/sassdoc/grunt-sassdoc/blob/master/Gruntfile.js)
in the repository for a full example.


## SassDoc task

Run this task with the `grunt sassdoc` command.

Task targets, files and options may be specified according to the Grunt
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.


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
// Bare minimum example.
grunt.initConfig({
  'sassdoc': {
    'default': {
      'src': 'path/to/sass',
      'dest': 'path/to/docs'
    }
  }
});
{% endhighlight %}

{% highlight js %}
// Example with external view configuration file.
grunt.initConfig({
  'sassdoc': {
    'default': {
      'src': 'path/to/sass',
      'dest': 'path/to/docs',
      'options': {
        'config': 'path/to/view.json'
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
  'sassdoc': {
    'default': {
      'src': 'path/to/sass',
      'dest': 'path/to/docs',
      'options': {
        'display': {
          'access': ['public', 'private'],
          'alias': true,
          'watermark': true
        },
        'package': './package.json',
        'theme': 'sassdoc-theme-dark',
        'groups': {
          'slug': 'Title',
          'helpers': 'Helpers',
          'hacks': 'Dirty Hacks & Fixes',
          'undefined': 'Ungrouped'
        },
        'basePath': 'https://github.com/SassDoc/sassdoc'
      }
    }
  }
});
{% endhighlight %}


## Events

This task will emit a `start` event when compilation begins, and a `done` event on completion.
This is useful if you would like simple notifications about the compile process.

<p class="note  note--danger"><strong>Caution!</strong> The <code>start</code> and <code>done</code> events are not intended for replacing the standard Grunt API for configuring and running tasks.</p>

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
