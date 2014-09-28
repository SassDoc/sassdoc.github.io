---
layout: default
title: "Extending SassDoc"
group: "Custom theme"
---

Since 1.8, SassDoc allows you to define custom annotations.

This can only be done from a [custom theme](/using-your-own-theme/) since SassDoc can't guess how you want your custom annotations to be displayed.

Here's a simple example to add a few simple annotations to SassDoc within your theme:

{% highlight js %}
module.exports = function () {
  // Usual theme function
};

/**
 * Export an annotations array to extend SassDoc.
 *
 * Each annotation is an object with a `name` property, a `parse`
 * method, and optionnally `resolve` and `default` methods, and
 * an `alias` array.
 *
 * * The `parse` method takes the annotation content as parameter, and
 *   returns the parsed data (can be of any type - it will be available
 *   in the theme as `item.{{annotationName}}`, as an array since
 *   an annotation can be present multiple times).
 *
 * * The `resolve` method is called after the raw data is generated,
 *   and is passed SassDoc data (indexed by type and name). You can then
 *   modify this object reference as you want to complete your data
 *   structure while having access to the whole data.
 *
 * * The `default` method returns a default value for when the annotation
 *   is not present.
 *
 * `name` and `alias` are self-explanatory.
 */
module.exports.annotations = [

  /**
   * Add a `@awesome` annotation (meaning the annotated item is awesome)
   * (also aliased as `@wow`).
   *
   * This annotation is just meant to be applied as-is, without any
   * argument.
   *
   * You can then add a condition on `item.awesome` in your templates!
   */
  {
    name: 'awesome',
    parse: function () {return true;},
    default: function () {return false;},
    alias: ['wow'],
  },

  /**
   * Add a `@friend` annotation to mark an item as "friend".
   *
   *     @friend {function} foo
   *     @friend {variable} bar
   *
   * In your templates, `item.friend` will be an array of references
   * to the "friends" items.
   */
  {
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
  },
];
{% endhighlight %}

For more examples, you can look at [the core annotations](https://github.com/SassDoc/sassdoc/tree/master/src/annotation/annotations) which are very insightful.
