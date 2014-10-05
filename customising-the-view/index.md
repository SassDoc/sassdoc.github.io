---
layout: default
title: "Customising the view"
---

SassDoc makes it possible for you to pass variables to the view through the `--config` option. In itself, this configuration does absolutely nothing. But then it gets merged with the one from the theme (if there is one). In case a key is present in both files, the one from your file will takes precedence (so you can override theme's settings).

## Customising SassDoc's default theme

[SassDoc's default theme](https://github.com/SassDoc/sassdoc-theme-light) has a couple of options to give you some extra power over the view. You can override or complete this configuration with a JSON or YAML file.

Here's a JSON example:

{% highlight js %}
{
  display: {
    access: ['public', 'private'],
    alias: false,
    watermark: true
  },

  package: './package.json',

  groups: {
    undefined: 'General'
  },

  theme: 'default',

  basePath: 'https://github.com/SassDoc/sassdoc'
}
{% endhighlight %}

And the same configuration in YAML:

{% highlight yaml %}
display
    access: ["public", "private"]
    alias: false
    watermark: true

package: "./package.json"

groups:
    undefined: "General"

theme: "default"
basePath: "https://github.com/SassDoc/sassdoc"
{% endhighlight %}

| Type | Name | Description |
|:-----|:-----|:------------|
| `Array` | `display.access` | access levels that should be displayed |
| `Boolean` | `display.alias` | enable/disable display of alias items |
| `Boolean` | `display.watermark` | mention to SassDoc in footer (be cool, leave it!) |
| `String`/`Object` | `package` | path to a custom JSON file or directly an object |
| `Object` | `groups` | keys are group slugs you defined with `@group` annotations and values are group aliases, displayed in the view |
| `String` | `theme` | custom or contrib theme name |
| `String` | `basePath` | a path or URL to link to sources files from generated docs |

Before setting the `package` key you have to know we try to find a `package.json` file at 3 different places before giving up:

* a relative path from your current folder,
* a relative path from the theme folder,
* an absolute path.

If this doesn't work for you, then you can set your own package. The package object (either direct or required from a path) should ideally contain:

* `title`: human name of your project
* `name`: package name of your project (in case `title` is not defined)
* `version`: your project's version
* `license`: your project's license
* `homepage`: URL to your project's homepage
* `description`: description of your project

### From the CLI

Use the `-c` or `--config` option to define the path to your configuration file. If the option is not defined, SassDoc will try in this order: `view.json`, `view.yaml`, `view.yml` in the current directory. If nothing is found, the theme's default configuration will be used.

{% highlight sh %}
sassdoc source/ destination/       -c path/to/config.json # Short option and JSON file
sassdoc source/ destination/ --config path/to/config.yaml # Long  option and YAML file
{% endhighlight %}

### From the Node API

When using the Node API instead of the CLI, it's easier to use an object from the ground up and to pass it as the 3rd argument to the `documentize` method.

{% highlight js %}
var config = {
  "display": {
    "access": ["public", "private"],
    "alias": false,
    "watermark": true
  },

  "package": "./package.json"
}

var sassdoc = require('sassdoc');
sassdoc.documentize(source, dest, config);
{% endhighlight %}