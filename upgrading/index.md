---
layout: default
title: "Upgrade from 1.0 to 2.0"
---

## C-style comments

The support of C-style `/**` comments [have been dropped][issue-326].
You can use the following scripts to upgrade your codebase to `///`
comments if you were using them:

**GNU `sed`:**

{% highlight sh %}
find . -name '*.s[ac]ss' -exec sed -i 's,^/\*\*,///,;s,^  *\*\*/,////,;s,^  *\*/,///,;s,^  *\*,///,' {} +
{% endhighlight %}

**Mac/BSD `sed`:**

{% highlight sh %}
find . -name '*.s[ac]ss' -exec sed -i '' 's,^/\*\*,///,;s,^  *\*\*/,////,;s,^  *\*/,///,;s,^  *\*,///,' {} +
{% endhighlight %}

The script can't handle all the possible edge cases, so please make sure
to run it in a version-controlled environment, and review carefully the
changes.

You'll also have to manually fix all your [poster comments] by hand
since there is no way for this script to convert them accurately; only
the closing can be converted, but you'll need to add a `/` to all poster
openings.

If you want to know more on what's happening in these cryptic `sed`
commands, here is the commented `sed` source:

{% highlight sh %}
# Opening (can't determine if poster or normal)
s,^/\*\*,///,

# Poster closing
s,^  *\*\*/,////,

# Normal closing
s,^  *\*/,///,

# Comment body
s,^  *\*,///,
{% endhighlight %}

[issue-326]: https://github.com/SassDoc/sassdoc/issues/326
[poster comments]: http://sassdoc.com/file-level-annotations/

## Annotations

The default value of some annotations is now inside square brackets
instead of parentheses. This affects `@param` and `@prop`.

**Before:**

{% highlight scss %}
/// @param {String} $foo (bar) - Baz.
@function baz($foo) {}
{% endhighlight %}

**After:**

{% highlight scss %}
/// @param {String} $foo [bar] - Baz.
@function baz($foo) {}
{% endhighlight %}

You can use the following script to update your codebase, though
it will replace all the parentheses by square brackets in the lines
containing the affected annotations, which may not be what you want
(for example if there's parentheses inside the default value or in
the description).

Be sure to review the changes made by the script and eventually fix
details by hand.


**GNU `sed`:**

{% highlight sh %}
find . -type f -name '*.s[ac]ss' -exec sed -ri '/@param|@prop/y/()/[]/' {} +
{% endhighlight %}

**BSD/Mac `sed`:**

{% highlight sh %}
find . -type f -name '*.s[ac]ss' -exec sed -Ei '' '/@param|@prop/y/\(\)/\[\]/' {} +
{% endhighlight %}

## CLI

The CLI usage slightly changed, since the destination is now optional
and configurable with an option instead of an argument, so you'll have
to update your scripts using SassDoc if you have any.

**Before:**

{% highlight sh %}
sassdoc scss/ doc/
{% endhighlight %}

**After:**

{% highlight sh %}
sassdoc scss/ --dest doc/
{% endhighlight %}

When you don't give a destination, SassDoc will put the documentation in
a `sassdoc` folder in the current directory.

**SassDoc will wipe the whole destination folder upon each run, so be
sure you don't have anything important in it.**

## Node

The `documentize` function from 1.0 is now the default export from the
`sassdoc` module.

**Before:**

{% highlight js %}
var sassdoc = require('sassdoc');

sassdoc.documentize('scss/').then(function () {
  console.log('All done!');
});
{% endhighlight %}

**After:**

{% highlight js %}
var sassdoc = require('sassdoc');

sassdoc('scss/').then(function () {
  console.log('All done!');
});
{% endhighlight %}

The `parse` function still works the same way as in 1.0.
