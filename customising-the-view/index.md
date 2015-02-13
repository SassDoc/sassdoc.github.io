---
layout: default
title: "Customising the view"
---

## Introduction

Aside from regular [configuration][configuration] from SassDoc itself, it is likely that the theme you use provides some kind of default configuration that you can overload.

This is done exactly like the regular configuration, within the same configuration file. Please refer to the [configuration documentation][configuration] to learn how to specify a configuration file.

## Options

[SassDoc's default theme][repo_theme] has a couple of options to give you some extra power over the view.

| Option              | Type    | Default                 |
|---------------------|---------|-------------------------|
| `display.access`    | Array   | `["public", "private"]` |
| `display.alias`     | Boolean | `false`                 |
| `display.watermark` | Boolean | `true`                  |
| `basePath`          | String  | `""`                    |
| `shortcutIcon`      | String  | `""`                    |
| `googleAnalytics`   | String  | `""`                    |
| `trackingCode`      | String  | `""`                    |
| `sort`              | Array   |                         |

## Visibility display

The `display.access` option lists access levels that are being displayed, default is all (both `public` and `private`). If you don't want to display `private` items, you can remove it from the array, like so:

{% highlight yaml %}
display:
  access:
    - public
{% endhighlight %}

## Alias display

The `display.alias` option defines whether or not aliases should be displayed. Default value is `false`, meaning that aliases items are not displayed in the docs. They are documented and exist in the raw data, but are simply not displayed.

If you want to display aliases as well, change the value to `true`.

{% highlight yaml %}
display:
  alias: true
{% endhighlight %}

## Watermark display

The default theme from SassDoc displays a discret *© Made with love by [SassDoc][organisation] team.* in the footer, in order to promote the tool and share the love. You can turn off this watermak if you like, but we would really appreciate you to leave it if you use this theme.

{% highlight js %}
display:
  watermark: false
{% endhighlight %}

Along the same lines, if you build your own theme, adding a little mention to SassDoc somewhere on the page would be very nice of you!

## Base path

The `basePath` option is used to provide a *View source* link to each item in case the code is hosted on a public repository. By setting the option to the base path of your repository, and thanks to SassDoc's parser keeping track of the file name, the path and the lines number, we are able to build links such as:

    https://github.com/sassdoc/sassdoc-theme-default/tree/master/scss/utils/_functions.scss#L13-L37

<p class="note  note--warning">
  <strong>Caution!</strong> as you can see from the previous example, GitHub adds <code>/tree/master</code> or <code>/blob/&lt;branch_name&gt;</code> between the base path and the file path. To prevent your links from being broken, set your base path to: <code>https://github.com/USERNAME/REPOSITORY/tree/master</code> (or <code>/blob/&lt;branch_name&gt;</code>).
</p>

## Shortcut icon

The `shortcutIcon` option can be used to provide a favicon to your documentation. It accepts a path, either relative or absolute.

{% highlight yaml %}
shortcutIcon: assets/images/favicon.png
{% endhighlight %}

## Google Analytics

If you are using Google Analytics to track users behaviour on your site, you can set your Google Analytics tracking key as a value for the `googleAnalytics` key.

{% highlight yaml %}
googleAnalytics: UA-XXXXX-YY
{% endhighlight %}

## Tracking code

In case you don't use Google Analytics, or use a custom tracking code snippet, you can set it as a value to the `trackingCode` option. It will be directly injected in the DOM as HTML, so be sure to include `<script>` and `</script>` tags if you need them.

{% highlight yaml %}
trackingCode: |
  <img src="http://piwik.example.org/piwik.php?idsite={$IDSITE}amp;rec=1" style="border:0" alt="" />
{% endhighlight %}

<p class="note  note--info"><strong>Note:</strong> in YAML, you can leave a single pipe on the first line to indicate that the everything until the next key is a literal string.</p>

<p class="note  note--danger"><strong>Beware!</strong> This is a possible door to JavaScript code injection. Be careful.</p>

## Sort

You can customize the order of your items with this option.

Supported criteria are:

* [`group`]({{ site.data.routes.configuration }}#groups)
* `file`
* [`line`]({{ site.data.routes.annotations }}#comment-range)
* [`access`]({{ site.data.routes.annotations }}#access)

The `sort` context key is an array of strings, representing a sort
criteria plus an optional sort order. The sort order is determined if
the last character is either `>` or `<` (respectively desc and asc).

{% highlight yaml %}
sort:
  - access
  - line>
  - group
  - file
{% endhighlight %}

This will sort the data by access (public first, then private, `access>` would have inverted the order), then by descending line (last items in the file first), then by alphetical group (case insensitive), then by file.

## Example

Here's a JSON example:

{% highlight json %}
{
  "basePath": "https://github.com/SassDoc/sassdoc",
  "shortcutIcon": "assets/images/favicon.png",
  "display": {
    "access": ["public", "private"],
    "alias": false,
    "watermark": true
  },

  "package": "./package.json",
  "theme": "default",
  "groups": {
    "undefined": "General"
  },

  "googleAnalytics": "UA-XXXXX-YY",
  "tracking": "<img src=\"http://piwik.example.org/piwik.php?idsite={$IDSITE}amp;rec=1\" style=\"border:0\" alt=\"\" />"
}
{% endhighlight %}

And the same configuration in YAML:

{% highlight yaml %}
basePath: https://github.com/SassDoc/sassdoc
shortcutIcon: assets/images/favicon.png
display:
    access:
        - public
        - private
    alias: false
    watermark: true

package: ./package.json
theme: default
groups:
    undefined: General

googleAnalytics: UA-XXXXX-YY

tracking: |
  <img src="http://piwik.example.org/piwik.php?idsite={$IDSITE}amp;rec=1" style="border:0" alt="" />
{% endhighlight %}

{% include routes.html %}
