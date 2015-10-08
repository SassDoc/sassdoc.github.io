---
title: "Extra tools"
layout: default
---

## Introduction

If you have embarked upon the task of building your own theme, you'll be pleased to know SassDoc comes with some [extra tools][repo_extras] for theme builders. These filters add some features to SassDoc by post-processing the data.

Extras can be added by requiring `sassdoc-extras`, calling the extra function on it, and passing it the context object.
For example, to use the [Markdown](#markdown) extra:

{% highlight js %}
var extras = require('sassdoc-extras');

// Your theme function
module.exports = function (dest, ctx) {
  // ...

  extras.markdown(ctx);
};
{% endhighlight %}

To use multiple extras, you can "chain" them like this:

{% highlight js %}
extras(ctx, 'markdown', 'display', 'shortcutIcon');
{% endhighlight %}

## Markdown (`markdown`)

You may have noticed most descriptions from annotations are parsed as Markdown. This is thanks to the Markdown filter from [sassdoc-extras][repo_extras] (using [Marked](https://github.com/chjj/marked)). This filter overrides the provided values.

For example, ``This is some `code`.`` becomes ``This is some <code>code</code>``.

## Display toggle (`display`)

The `display` filter allows you to display items based on their visibility (access level: `public` or `private`). This filter removes items that should not be displayed.

The `display` filter uses the `display.access` key from the context configuration to determine if an item should be displayed or not.

<p class="note  note--info"><strong>Note:</strong> It's always best to define an access level.</p>

{% highlight js %}
{
  display: {
    access: ['private', 'public'],
  },
}
{% endhighlight %}

## Groups aliases (`groupName`)

The `groupName` filter allows you to define aliases for group slugs (see [reference]({{ site.data.routes.configuration }}#groups)). When using `@group` annotation in your SassDoc comments, you usually define a slug (a lowercase string without spaces). If you want your theme to display pretty titles, you can map those slugs to human-friendly names by setting a `groups` key in your context configuration.

{% highlight js %}
{
  groups: {
    undefined: 'Private',
    api: 'API',
    hacks: 'Dirty Hacks & Fixes',
  },
}
{% endhighlight %}

<p class="note  note--info"><strong>Note:</strong>  The `groupName` filter overrides the `group` key of each item.</p>

Result of using the `group` key:

{% highlight js %}
{
  'group': ['hacks'],
}
{% endhighlight %}

Result of using the `groupName` filter:

{% highlight js %}
{
  'group': { 'hacks': 'Dirty Hacks & Fixes' },
}
{% endhighlight %}

## Shortcut icon (`shortcutIcon`)

The `shortcutIcon` filter takes the eponymous key from the configuration and converts it into an object with `type`, `url` and `path` keys.

Result of using a URL `http://absolute.path/to/icon.png` in `ctx.shortcutIcon`:

{% highlight js %}
{
  type: 'external',
  url: 'http://absolute.path/to/icon.png',
}
{% endhighlight %}

Result of using a relative path `relative/path/to/icon.png` in `ctx.shortcutIcon`:

{% highlight js %}
{
  type: 'internal',
  url: 'icon.png',
  path: '/complete/relative/path/to/icon.png',
}
{% endhighlight %}

## Sort (`sort`)

The `sort` filter sorts the items from a `sort` configuration value.

Supported criteria:

* [`group`]({{ site.data.routes.configuration }}#groups)
* `file`
* [`line`]({{ site.data.routes.annotations }}#comment-range)
* [`access`]({{ site.data.routes.annotations }}#access)

The sort order is determined by the last character: `>` (desc) _or_ `<` (asc).

{% highlight js %}
{
  sort: [
    'access',
    'line>',
    'group',
    'file',
  ],
}
{% endhighlight %}

{% include routes.html %}

## Description (`description`, `descriptionPath`)

This filter introduces the `description` and `descriptionPath` configuration keys.

The `description` key contains raw description text. The `descriptionPath` contains the path to a file containing the description.

<p class="note  note--info"><strong>Note:</strong>  Using `descriptionPath` will override the `description` key.</p>

{% highlight js %}
{
  descriptionPath: '../README.md',
}
{% endhighlight %}

The `descriptionPath` is relative to the configuration file, and has no required format.

<p class="note  note--info"><strong>Note:</strong>  If the `markdown` filter is called **after** the `description` filter, it will parse the description value as Markdown.</p>
