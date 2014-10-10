---
layout: default
title: "Extending SassDoc"
---

SassDoc allows you to define custom annotations. This can only be done
from a [custom theme](/using-your-own-theme/) since there is no way for
SassDoc to guess what to do or how those annotations should be displayed.

Here's a simple example to add a few simple annotations to SassDoc
within your theme.

First, you'll have the usual theme function. Refer to [Using Your Own Theme](/using-your-own-theme/) for more informations about this.

{% highlight js %}
module.exports = function () {
  // Usual theme function
};
{% endhighlight %}

Then, you will export an annotations array to extend SassDoc.

{% highlight js %}
module.exports.annotations = [];
{% endhighlight %}

## Schema

Each annotation is an object with a `name` property, a `parse`
method, and optionnally `resolve` and `default` methods, and
an `alias` array.

| Key | Type | Description |
|-----|------|-------------|
| `parse` | function | Takes the annotation content as parameter and returns the parsed data (can be of any type &mdash; it will be available in the theme as `item.<annotationName>`, as an array since an annotation can be present multiple times). |
| `resolve` | function | Called after the raw data is generated, where the whole SassDoc data is being passed (indexed by type and name). You can then modify this object reference as you want to complete your data structure while having access to the whole data. |
| `default` | function | Returns a default value when &mdash;if ever&mdash; the annotation is not present. |
| `autofill` | function | ____ |
| `name` | string | Name of the annotation. |
| `alias` | array | List of aliases for the annotation. |

## Examples

We can add an `@awesome` annotation (meaning the annotated item is
awesome) (also aliased as `@wow`).

This annotation is just meant to be applied as-is, without any
argument.

You can then add a condition on `item.awesome` in your templates!

{% highlight js %}
module.exports.annotations.push({
  name: 'awesome',
  parse: function () { return true },
  default: function () { return false },
  alias: ['wow']
});
{% endhighlight %}

Then, a `@friend` annotation to mark an item as "friend", for example:

{% highlight scss %}
/**
 * @friend {function} foo
 * @friend {variable} bar
 */
{% endhighlight %}

In your templates, `item.friend` will be an array of references
to the "friends" items.

{% highlight js %}
module.exports.annotations.push({
  name: 'friend',

  parse: function (text) {
    var match = /^\{(.*)\}\s*(.*)$/.exec(text.trim());
    return {
      type: match[1],
      name: match[2]
    };
  },

  resolve: function (data) {
    Object.keys(data).forEach(function (type) {
      Object.keys(data[type]).forEach(function (name) {
        var item = data[type][name];

        if (!item.friend) {
          return;
        }

        item.friend.map(function (friend) {
          return data[friend.type][friend.name];
        });
      });
    });
  },
});
{% endhighlight %}

For more examples, you can look at [the core annotations] which are very
insightful.

[the core annotations]: https://github.com/SassDoc/sassdoc/tree/master/src/annotation/annotations
