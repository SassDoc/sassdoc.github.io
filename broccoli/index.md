---
layout: default
title: "Broccoli integration"
---

## Introduction

{% highlight sh %}
npm install --save-dev broccoli-sassdoc
{% endhighlight %}

## Usage

{% highlight js %}
var sassdoc = require('broccoli-sassdoc');
var docs = sassdoc(tree, options);
{% endhighlight %}

... where:

* `tree`: A [Broccoli tree](https://github.com/broccolijs/broccoli#plugin-api-specification) or a directory path as a string.
* `options`: An object of options to pass to SassDoc.

## Options

Any specified option will be passed through directly to SassDoc, thus you can
specify any option that SassDoc supports. Refer to:

* [Command Line][command_line] for CLI options;
* [Configuration][configuration] for SassDoc options;
* [Customising the view][view] for default theme options.

<p class="note note--info">
  <strong>Heads up:</strong> if a config file is passed
and found, its options will prevail over defaults. Additional options passed to
the Grunt task, will complement it but not override it.
You should really manage your options in one place.
</p>

## Examples

{% highlight js %}
// Bare minimum, using defaults.
var docs = sassdoc('path/to/sass');
{% endhighlight %}

{% highlight js %}
// Example with external view configuration file.
var docs = sassdoc('path/to/sass', {
    config: 'path/to/view.json',
});
{% endhighlight %}

{% highlight js %}
// Example with passed in options.
var docs = sassdoc('path/to/sass', {
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    },
    package: './package.json',
});
{% endhighlight %}

{% include routes.html %}
