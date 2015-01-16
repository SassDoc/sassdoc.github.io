---
title: "Configuration"
layout: default
---

## Introduction

SassDoc comes with surprisingly few configuration in itself. Most of the configuration is [brought by the theme][view]. However, you don't have to set up a configuration file in the theme package, that would be silly.

Here is how it works: SassDoc merge the configuration file you provide (or that is being automatically fetched) with the one from the theme. If an option is set in both files, the one you set yourself overrides the one from the theme.

To provide a configuration file, use the `--config`  (or `-c`) option when running `sassdoc`. If the option is not defined, SassDoc will try to find a file named `.sassdocrc` (no extension). So if you don't feel like passing the `--config` option every time, just name your file `.sassdocrc`.

{% highlight sh %}
sassdoc source/       -c path/to/config.json # Short option and JSON file
sassdoc source/ --config path/to/config.yaml # Long  option and YAML file
{% endhighlight %}

If you are using the Node API rather than the CLI tool, you can pass your configuration object as the third argument of the `sassdoc` function:

{% highlight js %}
var sassdoc = require('sassdoc');
sassdoc(source, config);
{% endhighlight %}

## Options

Here is the available configuration that does not depend on the theme whatsoever:

| Option               | Type            | Default                    |
|----------------------|-----------------|----------------------------|
| `dest`               | String          | `./sassdoc`                |
| `package`            | String / Object | `./package.json`           |
| `theme`              | String          | `default`                  |
| `autofill`           | Array           | `["requires", "throws"]`   |
| `groups`             | Object          | `{ undefined: "general" }` |
| `no-update-notifier` | Boolean         | `false`                    |
| `verbose`            | Boolean         | `false`                    |

## Destination

The `dest` option is the path to the documentation directory to generate. By default it's `sassdoc` in the current directory.
SassDoc will wipe this directory at every run, so don't put anything worthwhile in it.

## Package

The `package` option is either a path (string) to a JSON file or directly an object.
It contains information about the documented project (for instance a `package.json`, hence the name of the key).

If you provide a path, it will be resolved from the configuration file (or CWD if you have no configuration file). By default, it's `package.json` (with the same resolving rules).

If this doesn't work for you, then you can set your own package. The package object (either direct or required from a path) should ideally contain (for the theme to access to various information about your project):

* `title`: human name of your project
* `name`: package name of your project (in case `title` is not defined)
* `version`: your project's version
* `license`: your project's license
* `homepage`: URL to your project's homepage
* `description`: description of your project

<p class="note  note--info">
  A given path must be relative to the configuration file.
</p>

<p class="note  note--info">
  Note that if you set this option as a path to a JSON file, we will override it with the content of this JSON file once in the view, thus <code>package</code> will no longer contain a string, but an object.
</p>

## Theme

The `theme` option is the name of a theme to be used. If not set, it will default to `default`, which means SassDoc will use `sassdoc-theme-default`, the official theme.

Based on the value you set, for instance `unicorn`, SassDoc will try to resolve it this way:

* if the value contains a `/`, it's `require`d as a Node package;
* otherwise it's required as `sassdoc-theme-{{value}}` (like `sassdoc-theme-unicorn` in our example).

<p class="note  note--info">
  <strong>Note:</strong> see <a href="{{ site.data.routes.custom_theme }}">Using Your Own Theme</a> to build your own theme.
  Also see the <a href="{{ site.data.routes.theme_gallery }}">Theme Gallery</a> to see some existing themes.
</p>

## Autofill

The `autofill` option tells which annotations SassDoc should try to autofill when possible. For instance, SassDoc is able to figure from your code if an item requires another item, or if an item is likely to throw an error (`@error` directive from Sass) in some circumstancies.

Meanwhile, SassDoc is not a Sass lexer. It is not infallible, and in some rare occasions, it can return some false positive annotations. To prevent this from happening, either you're able to locate the issue and fix it, or you can disable the autofilling for this specific type of annotation by removing its name from the array.

For instance, a falsy value, like an empty array would disable SassDoc autofill feature altogether:

{% highlight yaml %}
autofill: []
{% endhighlight %}

Or you can enable only some annotations to be autofilled (here all supported annotations are listed):

{% highlight yaml %}
autofill:
  - throw
  - content
  - require
{% endhighlight %}

## Groups

The `groups` option is an object of aliases for group slugs. When you gather items in groups with the `@group` annotation, you specify a slug string, without spaces or formatting (e.g. `api-helpers`). In the `groups` object, you can associate a group slug with a group name so the latter gets used in the view rather than the dirty slug (e.g. `API Helpers`).

All non-grouped items are gathered by SassDoc in an `undefined` group, that is being aliased as *General*. Feel free to change this to suit your preferences.

{% highlight yaml %}
groups:
  api-helpers: API Helpers
  undefined: Ungrouped
{% endhighlight %}

<p class="note  note--warning"><strong>Note:</strong> that for this feature to work, <a href="{{ site.data.routes.extra_tools }}#groups-aliases">sassdoc-extras</a> has to be used by the theme, which is obviously the case with the default theme.</p>

## No update notifier

SassDoc tries to make sure you always use an up-to-date version. If it is not the case, it will prompt you to update your current version. You can disable this behaviour by using the `no-update-notifier` option.

<p class="note  note--info"><strong>Note:</strong> you can also use the CLI option <code>--no-update-notifier</code>.</p>

## Verbose

SassDoc will output messages at the various documentation process states.

{% include routes.html %}
