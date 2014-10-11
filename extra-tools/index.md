---
title: "Extra tools"
layout: default
---

If you have made up so far into building your own theme, you'll be pleased to now SassDoc comes with some [extra tools](https://github.com/sassdoc/sassdoc-extras) for theme builders. Those filters add some features to SassDoc by post-processing the data.

## Markdown

You may have noticed most descriptions from annotations are parsed as Markdown. This is thanks to the Markdown filter from sassdoc-filter (using [Marked](https://github.com/chjj/marked)).

Usage:

{% highlight js %}
var filter = require('sassdoc-filter');

// Your theme function
module.exports = function (dest, ctx) {
  // ...

  filter.markdown(ctx);
};
{% endhighlight %}

This filter adds some extra key to annotations that can be parsed as Markdown so be sure to use them in your templates rather than the usual keys:

* `ctx.package.htmlDescription`
* `htmlAuthor`
* `htmlThrows`
* `htmlTodo`
* `htmlDescription`
* `htmlDescription` to `returns`
* `htmlDescription` to `example`
* `htmlDescription` to `parameters`
* `htmlDescription` to `prop`
* `htmlDescription` to `content`

## Display toggle

Depending on whether or not you want to display items based on their visibility (access level, `public` or `private`), the `display` filter might be able to help you. When used, it adds a `display` key to each item that is either `true` or `false`.

To determine if an item should be displayed or not, this filter reads the `display.access` key from the context configuration (so make sure your theme defines one).

{% highlight js %}
{
  display: {
    access: ["private", "public"]
  }
}
{% endhighlight %}

Usage:

{% highlight js %}
var filter = require('sassdoc-filter');

// Your theme function
module.exports = function (dest, ctx) {
  // ...

  filter.display(ctx);
};
{% endhighlight %}

## Groups aliases

The `groupName` filter makes it possible for you to define aliases for your group slugs (see [reference](/configuration/#groups)). When using `@group` annotation in your SassDoc comments, you usually define a slug (a lowercase string without spaces). If you want your theme to display pretty titles, you can map those slugs to human-friendly names by setting a `groups` key in your context configuration.

{% highlight js %}
{
  groups: {
    undefined: "Private",
    api: "API",
    hacks: "Dirty Hacks & Fixes"
  }
}
{% endhighlight %}

Note that this filter rewrites the `group` key from each item. For instance, an item with such a group key:

{% highlight js %}
{
  "group": [["hacks"]]
}
{% endhighlight %}

... would look like this once the `groupName` filter has been used:

{% highlight js %}
{
  "group": {"hacks": "Dirty Hacks & Fixes"}
}
{% endhighlight %}

Usage:

{% highlight js %}
var filter = require('sassdoc-filter');

// Your theme function
module.exports = function (dest, ctx) {
  // ...

  filter.groupName(ctx);
};
{% endhighlight %}

## Shortcut icon

When used, the `shortcutIcon` filter takes the eponymous key from the configuration and converts it into an object with `type`, `url` and `path` keys.

For instance, `"http://absolute.path/to/icon.png"` as a value in `ctx.view.shortcutIcon` would yield `ctx.shortcutIcon` as:

{% highlight js %}
{
  type: "external",
  url: "http://absolute.path/to/icon.png"
}
{% endhighlight %}

On the other hand, a relative path like `"relative/path/to/icon.png"` would leave `ctx.view.shortcutIcon` as:

{% highlight js %}
{
  type: "internal",
  url: "icon.png",
  path: "/complete/relative/path/to/icon.png"
}
{% endhighlight %}

Usage:

{% highlight js %}
var filter = require('sassdoc-filter');

// Your theme function
module.exports = function (dest, ctx) {
  // ...

  filter.shortcutIcon(ctx);
};
{% endhighlight %}