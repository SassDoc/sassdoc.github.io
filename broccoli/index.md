---
layout: default
title: "Broccoli integration"
---

## Getting started

{% highlight sh %}
npm install --save-dev broccoli-sassdoc
{% endhighlight %}


## Usage

{% highlight js %}
var sassdoc = require('broccoli-sassdoc');
var docs = sassdoc(tree, options);
{% endhighlight %}

... where:

* `tree`: A [broccoli tree](https://github.com/broccolijs/broccoli#plugin-api-specification) or a directory path as a string.
* `options`: An object of options to pass to SassDoc.


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
// Bare minimum, using defaults.
var docs = sassdoc('path/to/sass');
{% endhighlight %}

{% highlight js %}
// Example with external view configuration file.
var docs = sassdoc('path/to/sass', {
    'config': 'path/to/view.json'
});
{% endhighlight %}

{% highlight js %}
// Example with passed in options.
var docs = sassdoc('path/to/sass', {
    'verbose': true,
    'display': {
      'access': ['public', 'private'],
      'alias': true,
      'watermark': true
    },
    'package': './package.json'
});
{% endhighlight %}
