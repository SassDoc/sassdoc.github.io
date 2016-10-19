---
layout: default
title: "Extending SassDoc"
---

## Introduction

SassDoc allows you to define custom annotations. This can only be done
from a [custom theme][custom_theme] since there is no way for
SassDoc to guess what to do or how those annotations should be displayed.

Here's a simple example to add a few simple annotations to SassDoc
within your theme. First, you'll have the usual theme function. Refer to [Using Your Own Theme][custom_theme] for more informations about this.

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

Each annotation is a function that returns an object with a `name` property, a `parse`
method, and optionally `resolve`, `default` and `autofill`
methods and well as an `alias` array and a `multiple` boolean.

| Key | Type | Description |
|-----|------|-------------|
| `name` | string | Name of the annotation. |
| `parse` | function | Takes the annotation content as parameter and returns the parsed data (can be of any type &mdash; it will be available in the theme as `item.<annotationName>`, as an array if `multiple` is `true`). |
| `resolve` | function | Called after the raw data is generated, where the whole SassDoc data is being passed (indexed by type and name). You can then modify this object reference as you want to complete your data structure while having access to the whole data. |
| `default` | function | Returns a default value when &mdash;&nbsp;if ever&nbsp;&mdash; the annotation is not present. |
| `autofill` | function | Takes a parsed annotation object. You can modify this object reference as you want while having access to the whole parsed content of the current annotation. |
| `multiple` | boolean | Indicates if this annotation is allowed multiple times per item (default is `true`). |
| `alias` | array | Array of aliases for the annotation. |

## Examples

We can add an `@awesome` annotation (meaning the annotated item is
awesome) (also aliased as `@wow`). This annotation is just meant to be applied as-is, without any
argument. You can then add a condition on `item.awesome` in your templates!

{% highlight js %}
module.exports.annotations.push(function () {
  return {
    name: 'awesome',
    parse: function () { return true; },
    default: function (comment) { return false; },
    autofill: function (comment) {},
    multiple: false,
    alias: ['wow']
  };
});
{% endhighlight %}

Then, a `@friend` annotation to mark an item as "friend", for example:

{% highlight scss %}
/// @friend {function} foo
/// @friend {variable} bar
{% endhighlight %}

In your templates, `item.friend` will be an array of references
to the "friends" items.

{% highlight js %}
module.exports.annotations.push(function () {
  return  {
    name: 'friend',
    parse: function (text) {
      var match = /^\{(.*)\}\s*(.*)$/.exec(text.trim());
      return {
        type: match[1],
        name: match[2],
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
    }
  };
});
{% endhighlight %}

For more examples, you can look at [the core annotations](https://github.com/SassDoc/sassdoc/tree/master/src/annotation/annotations) which are very
insightful.

{% include routes.html %}
