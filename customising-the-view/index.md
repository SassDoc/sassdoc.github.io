---
layout: default
title: "Customising the view"
---

Aside from regular [configuration](/configuration/) from SassDoc itself, it is likely that the theme you use provides some kind of default configuration that you can overload.

This is done exactly like the regular configuration, within the same configuration file. Please refer to the [configuration documentation](/configuration/) to learn how to specify a configuration file.

## Options

[SassDoc's default theme](https://github.com/SassDoc/sassdoc-theme-light) has a couple of options to give you some extra power over the view.

| Option              | Type    | Default                 |
|---------------------|---------|-------------------------|
| `display.access`    | Array   | `["public", "private"]` |
| `display.alias`     | Boolean | `false`                 |
| `display.watermark` | Boolean | `true`                  |
| `basePath`          | String  | `""`                    |
| `shortcutIcon`      | String  | `""`                    |

### display.access

The `display.access` option lists access levels that are being displayed, default is all (both `public` and `private`). If you don't want to display `private` items, you can remove it from the array, like so:

{% highlight js %}
{
  display: {
    access: ["public"]
  }
}
{% endhighlight %}

### display.alias

The `display.alias` option defines whether or not aliases should be displayed. Default value is `false`, meaning that aliases items are not displayed in the docs. They are documented and exist in the raw data, but are simply not displayed.

If you want to display aliases as well, change the value to `true`.

{% highlight js %}
{
  display: {
    alias: true
  }
}
{% endhighlight %}

### display.watermark

The default theme from SassDoc displays a discret *© Made with love by [SassDoc](http://github.com/sassdoc) team.* in the footer, in order to promote the tool and share the love. You can turn off this watermak if you like, but we would really appreciate you to leave it if you use this theme.

{% highlight js %}
{
  display: {
    watermark: false
  }
}
{% endhighlight %}

Along the same lines, if you build your own theme, adding a little mention to SassDoc somewhere on the page would be very nice of you!

### basePath

The `basePath` option is used to provide a *View source* link to each item in case the code is hosted on a public repository. By setting the option to the base path of your repository, and thanks to SassDoc's parser keeping track of the file name, the path and the lines number, we are able to build links such as: [https://github.com/sassdoc/sassdoc-theme-light/tree/master/scss/utils/_functions.scss#L13-L37](https://github.com/sassdoc/sassdoc-theme-light/tree/master/scss/utils/_functions.scss#L10-L31).

### shortcutIcon

The `shortcutIcon` option can be used to provide a favicon to your documentation. It accepts a path, either relative or absolute.

{% highlight js %}
{
  shortcutIcon: "assets/images/favicon.png"
}
{% endhighlight %}

## Example

Here's a JSON example:

{% highlight js %}
{
  basePath: "https://github.com/SassDoc/sassdoc",
  shortcutIcon: "assets/images/favicon.png",
  display: {
    access: ["public", "private"],
    alias: false,
    watermark: true
  },

  package: "./package.json",
  theme: "default",
  groups: {
    undefined: "General"
  }
}
{% endhighlight %}

And the same configuration in YAML:

{% highlight yaml %}
basePath: "https://github.com/SassDoc/sassdoc"
shortcutIcon: "assets/images/favicon.png"
display:
    access: ["public", "private"]
    alias: false
    watermark: true

package: "./package.json"
theme: "default"
groups:
    undefined: "General"
{% endhighlight %}