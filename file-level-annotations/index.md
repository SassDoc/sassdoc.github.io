---
layout: default
title: "File-level annotations"
---

## Introduction

You can define annotations at a file-level rather than on specific items. It is useful when you have a whole file sharing some annotations (for instance `@group`, `@author` and so on).

Usually, the *poster comment* goes on top of the file. In order to be parsed as a poster, it has to be prefixed by `////`. You should have 4 slashes on the first and last lines (which are usually empty lines), and any number of slashes in between (2, 3, 4...). See example below. Also, you cannot have more than on poster per file.

Feel free to add a description to it, however it won't be parsed in any way. For now, it is nothing but a comment. [At some point](https://github.com/SassDoc/sassdoc/issues/256), it might be useful though.

<p class="note  note--warning"><strong>Warning:</strong> when an item has an annotation that has already been defined on the poster, it <strong>overrides</strong> it. It is not merged with the one from the poster, it purely replaces it.</p>

## Example

{% highlight scss %}
////
/// This is a poster comment.
/// It will apply annotations to all items from file.
/// @group API
/// @author Hugo Giraudel
////

/// This item will have:
/// `@group API` and `@author Hugo Giraudel`
/// inherited from the poster.
@function dummy-function() {
  // ...
}

/// This item overrides the `@author` annotation
/// from the poster; it's not merged with it.
/// @author Fabrice Weinberg
@mixin dummy-mixin {
  // ...
}
{% endhighlight %}

{% include routes.html %}
