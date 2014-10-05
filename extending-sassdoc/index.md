---
layout: default
title: "Extending SassDoc"
group: "Custom theme"
---

Since 1.8, SassDoc allows you to define custom annotations.

This can only be done from a [custom theme](/using-your-own-theme/)
since SassDoc can't guess how you want your custom annotations to be
displayed.

Here's a simple example to add a few simple annotations to SassDoc
within your theme.

First, you'll have the usual theme function. It's not covered in this
page.

{% highlight js %}
module.exports = function () {
  // Usual theme function
};
{% endhighlight %}

Then, you will export an annotations array to extend SassDoc.

{% highlight js %}
module.exports.annotations = [];
{% endhighlight %}

Each annotation is an object with a `name` property, a `parse`
method, and optionnally `resolve` and `default` methods, and
an `alias` array.

The `parse` method takes the annotation content as parameter, and
returns the parsed data (can be of any type - it will be available
in the theme as `item.{{annotationName}}`, as an array since
an annotation can be present multiple times).

The `resolve` method is called after the raw data is generated,
and is passed SassDoc data (indexed by type and name). You can then
modify this object reference as you want to complete your data
structure while having access to the whole data.

The `default` method returns a default value for when the annotation
is not present.

`name` and `alias` are self-explanatory.

For example, we can add an `@awesome` annotation (meaning the annotated
item is awesome) (also aliased as `@wow`).

This annotation is just meant to be applied as-is, without any
argument

You can then add a condition on `item.awesome` in your templates!

{% highlight js %}
module.exports.annotations.push({
  name: 'awesome',
  parse: function () {return true;},
  default: function () {return false;},
  alias: ['wow'],
});
{% endhighlight %}

Then, a `@friend` annotation to mark an item as "friend", for example:

```
@friend {function} foo
@friend {variable} bar
```

In your templates, `item.friend` will be an array of references
to the "friends" items.

{% highlight js %}
module.exports.annotations.push({
  name: 'friend',

  parse: function (text) {
    var match = /^\{(.*)\}\s*(.*)$/.exec(text.trim());
    return {type: match[1], name: match[2]};
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
