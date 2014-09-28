---
layout: default
title: "File-level annotations"
group: "Getting started"
---

Starting version 1.7.0 of SassDoc, you can define annotations at a file-level rather than on specific items. It is useful when you have a whole file sharing some annotations (for instance `@group`, `@author` and so on).

Usually, the *poster comment* goes on top of the file. In order to be parsed as a poster, it has to be wrapped in `/** **/` (note the double-star at the end). Also, you cannot have more than on poster per file.

Feel free to add a description to it, however it won't be parsed in any way. At this point it is nothing but a comment. At some point, it might be useful though.

When an item has an annotation that has already been defined on the poster, it **overrides** it. It is not merged with the one from the poster, it purely replaces it.

## Example

{% highlight scss %}
/**
 * This is a poster comment.
 * It will apply annotations to all items from file.
 * @group API
 * @author Hugo Giraudel
 **/

/**
 * This item will have:
 * `@group API` and `@author Hugo Giraudel`
 * inherited from the poster.
 */
@function dummy-function() {
  // ...
}

/**
 * This item overrides the `@author` annotation
 * from the poster; it's not merged with it.
 * @author Fabrice Weinberg
 */
@mixin dummy-mixin {
  // ...
}
{% endhighlight %}