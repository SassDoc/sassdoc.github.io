---
layout: default
title: "File-level annotations"
---

## Introduction

You can define annotations at a file-level rather than on specific items. It is useful when you have a whole file sharing some annotations (for instance `@group`, `@author` and so on).

Usually, the *poster comment* goes on top of the file. In order to be parsed as a poster, it has to be prefixed by `////`. You should have 4 slashes on the first and last lines (which are usually empty lines), and any number of slashes in between (2, 3, 4...). See example below. Also, you cannot have more than on poster per file.

Feel free to add a description to it, however it won't be parsed in any way. For now, it is nothing but a comment. [At some point](https://github.com/SassDoc/sassdoc/issues/256), it might be useful though.


## Default behavior (extend)

When an item has an annotation that has already been defined on the poster, it will get merged (extend). So item level values will get added to file level ones.

This is the case for most of `multiple` enabled annotations.

#### Example

{% highlight scss %}
////
/// This is a poster comment.
/// It will apply annotations to all items from file.
/// @group API
/// @todo use more variables
////

/// This item will have:
/// `@group API` and `@todo use more variables`
/// inherited from the poster.
@function dummy-function() {
  // ...
}

/// This item extends the `@group` and `@todo` annotations
/// from the poster; they are merged.
/// @group utils
/// @todo fix it
@mixin dummy-mixin {
  // ...
}
// This item will have:
// group: ['API', 'utils']
// todo: ['use more variables', 'fix it']
{% endhighlight %}


## Override

However, annotation with the `overwritePoster` flag will have the opposite behaviour; they will override file level values.

This is the case for: `@author`, `@access`

#### Example

{% highlight scss %}
////
/// This is a poster comment.
/// It will apply annotations to all items from file.
/// @access private
/// @author Hugo Giraudel
////

/// This item will have:
/// `@access private` and `@author Hugo Giraudel`
/// inherited from the poster.
@function dummy-function() {
  // ...
}

/// This item overrides the `@access` and `@author` annotations
/// from the poster; they are replaced.
/// @access public
/// @author Fabrice Weinberg
@mixin dummy-mixin {
  // ...
}
// This item will have:
// access: 'public'
// author: ['Fabrice Weinberg']
{% endhighlight %}



{% include routes.html %}
