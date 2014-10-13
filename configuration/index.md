---
title: "Configuration"
layout: default
---

SassDoc comes with surprisingly few configuration in itself. Most of the configuration is [brought by the theme](/customising-the-view). However, you don't have to set up a configuration file in the theme package, that would be silly.

Here is how it works: SassDoc merge the configuration file you provide (or that is being automatically fetched) with the one from the theme. If an option is set in both files, the one you set yourself overrides the one from the theme.

To provide a configuration file, use the `--config`  (or `-c`) option when running `sassdoc`. If the option is not defined, SassDoc will try to find a file named `.sassdocrc` (no extension). So if you don't feel like passing the `--config` option every time, just name your file `.sassdocrc`.

{% highlight sh %}
sassdoc source/ destination/       -c path/to/config.json # Short option and JSON file
sassdoc source/ destination/ --config path/to/config.yaml # Long  option and YAML file
{% endhighlight %}

If you are using the Node API rather than the CLI tool, you can pass your configuration object as the third argument of the `documentize` function:

{% highlight js %}
var sassdoc = require('sassdoc');
sassdoc.documentize(source, dest, config);
{% endhighlight %}

## Options

Here is the available configuration that does not depend on the theme whatsoever:

| Option               | Type            | Default                    |
|----------------------|-----------------|----------------------------|
| `package`            | String / Object | `./package.json`           |
| `theme`              | String          | `default`                  |
| `autofill`           | Array           | `["requires", "throws"]`   |
| `groups`             | Object          | `{ undefined: "general" }` |
| `sass-convert`       | Boolean         | `false`                    |
| `no-update-notifier` | Boolean         | `false`                    |
| `force`              | Boolean         | `false`                    |

### Package

The `package` option is either a string to a JSON file containing information about the documented project (for instance a `package.json`, hence the name of the key), or directly an object. Please know that we try to find it in 3 different locations before giving up:

* a relative path from your current folder,
* a relative path from the theme folder,
* an absolute path.

If this doesn't work for you, then you can set your own package. The package object (either direct or required from a path) should ideally contain (so the theme can access to various information about your project):

* `title`: human name of your project
* `name`: package name of your project (in case `title` is not defined)
* `version`: your project's version
* `license`: your project's license
* `homepage`: URL to your project's homepage
* `description`: description of your project

Note that if you set this option as a path to a JSON file, we will override it with the content of this JSON file so once in the view, `package` will no longer contain a string, but an object.

### Theme

The `theme` option is the name of a theme to be used. If not set, it will default to `default`, which means SassDoc will use `sassdoc-theme-default`, the official theme.

Based on the value you set, for instance `unicorn`, SassDoc will try to require the following until one matches:

* a package named `sassdoc-theme-unicorn`;
* a folder named `./unicorn` (here, `.` is the configuration file directory);
* a package named `unicorn`.

<p class="note  note--info"><strong>Tip:</strong> to make sure it matches your local <code>unicorn</code> directory, and not a <code>sassdoc-theme-unicorn</code> from which you're not the author, we recommand you to set it to <code>./unicorn</code> if you are using a local theme.</p>

### Autofill

The `autofill` option tells which annotations SassDoc should try to autofill when possible. For instance, SassDoc is able to figure from your code if an item requires another item, or if an item is likely to throw an error (`@error` directive from Sass) in some circumstancies.

Meanwhile, SassDoc is not a Sass lexer. It is not infallible, and in some rare occasions, it can return some false positive annotations. To prevent this from happening, either you're able to locate the issue and fix it, or you can disable the autofilling for this specific type of annotation by removing its name from the array.

For instance, a falsy value, like an empty array would disable SassDoc autofill feature altogether:

{% highlight json %}
{
  "autofill": []
}
{% endhighlight %}

### Groups

The `groups` option is an object of aliases for group slugs. When you gather items in groups with the `@group` annotation, you specify a slug string, without spaces or formatting (e.g. `api-helpers`). In the `groups` object, you can associate a group slug with a group name so the latter gets used in the view rather than the dirty slug (e.g. `API Helpers`).

All non-grouped items are gathered by SassDoc in an `undefined` group, that is being aliased as *General*. Feel free to change this to suit your preferences.

<p class="note  note--warning"><strong>Note:</strong> that for this feature to work, <a href="/extra-tools/#groups-aliases">sassdoc-extras</a> has to be used by the theme, which is obviously the case with the default theme.</p>

### sass-convert

In itself, SassDoc does not support `.sass` files. If your code base is written in Sass indented syntax, pass `sass-convert` to `true` so SassDoc performs a Sass syntax conversion before running.

<p class="note  note--info"><strong>Note:</strong> you can also use the CLI option <code>--sass-convert</code>.</p>

### no-update-notifier

SassDoc tries to make sure you always use an up-to-date version. If it is not the case, it will prompt you to update your current version. You can disable this behaviour by using the `no-update-notifier` option.

<p class="note  note--info"><strong>Note:</strong> you can also use the CLI option <code>--no-update-notifier</code>.</p>


### force

Because the destination folder gets wiped and to prevent any accident, SassDoc prompts you whenever the destination folder is not empty. If you don't want SassDoc to ask you to confirm everytime you run it, you can use the `force` option to disable it.

<p class="note  note--info"><strong>Note:</strong> you can also use the CLI option <code>--no-prompt</code>.</p>

<p class="note  note--danger"><strong>Caution!</strong> SassDoc prompts you for a reason: the destination folder gets completely erased only to be recreated. Don't leave any important file in there.</p>
