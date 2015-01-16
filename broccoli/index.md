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

<p class="note  note--info">
  <strong>Heads up:</strong> if options or a config file are passed it will prevail
over <code>.sassdocrc</code> if any. You should really manage your options in one place.
</p>

## Destination

<p class="note  note--info">
  <strong>Heads up:</strong> Due to the way Broccoli operates, you have to specify
  the destination folder manually. <code>broccoli build path/to/dest</code>.
  In consequences, the <code>dest</code> option from SassDoc is disabled.
</p>

## Examples

### Bare minimum, using defaults.

{% highlight js %}
var docs = sassdoc('path/to/source');
{% endhighlight %}



### Example with external an configuration file.

{% highlight js %}
var docs = sassdoc('path/to/source', {
    config: 'path/to/config.json',
});
{% endhighlight %}



### Example with some options passed in.

{% highlight js %}
// Tip: you're not required to pass every options,
// just set the one you need.
var docs = sassdoc('path/to/source', options: {
  verbose: true,
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
  basePath: 'https://github.com/SassDoc/broccoli-sassdoc',
});
{% endhighlight %}



{% include routes.html %}
