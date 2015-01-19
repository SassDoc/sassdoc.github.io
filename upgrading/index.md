---
layout: default
title: "Upgrading to v2"
---

## Annotations

The default value of some annotations is now inside square brackets
instead of parentheses. This affects `@param`, `@prop` and `@require`.

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
find . -type f -name '*.s[ac]ss' -exec sed -ri '/@param|@prop|@require/y/()/[]/' {} +
{% endhighlight %}

**BSD/Mac `sed`:**

{% highlight sh %}
find . -type f -name '*.s[ac]ss' -exec sed -Ei '' '/@param|@prop|@require/y/\(\)/\[\]/' {} +
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
