---
layout: default
title: "Using your own theme"
group: "Custom theme"
---

## Introduction

SassDoc is fully themable. You can write your own theme for your
projects, and publish it on npm so other people can use it too!

When you set the `--theme` option of the cli interface, or the
`config.theme` option to `foo`, SassDoc will search for
a `sassdoc-theme-foo`, package, then `./foo`, and finally `foo`.

This means you can pass any path compatible with the `require` function
as a theme. The only requirement is the theme file must expose a
function implementing the following interface:

{% highlight js %}
/**
 * @param {string} dest Directory to render theme in.
 * @param {object} ctx Variables to pass to the theme.
 * @return {promise} A Promises/A+ implementation.
 */
module.exports = function (dest, ctx) {
  ...
};
{% endhighlight %}

You can find more informations on the Promises/A+ specification
[here](http://promises-aplus.github.io/promises-spec/), but note the
[`q` library](https://github.com/kriskowal/q) does a great job for this.

The [Themeleon](https://github.com/themeleon/themeleon) theming
framework is compatible with this interface, and allows you to write
themes without bothering with "low-level" considerations, like promises
handling, raw `fs` calls, making sure the destination directory exists,
etc.

<p class="note  note--info">Note: since SassDoc 1.8, you can also add your own annotations by exporting an `annotations` array. See more on <a href="/extending-sassdoc/">Extending SassDoc</a>.</p>

## Theme generator

We've built a [Yeoman generator](/theme-generator/)
to assist in scaffolding a new theme.
You will be given the possibility to customize the theme to your needs based on prompts.
It will output all the boilerplate files for you in one command.
Furthermore the generated code is loaded with inline documentation.

## Building the Theme

We will use Themeleon to build a new theme with Swig template engine
directly in in an existing project, and use it with SassDoc. Then, we
will export this theme in it's own npm package to make it available to
the world!

<p class="note  note--info"><strong>Note:</strong> you are not required to use Swig. Jade, Mustache, Nunjucks and Handlebars are also available as Themeleon plugins. Furthermore it's a breeze to
write a Themeleon extension for your favorite template engine&nbsp;&mdash;&nbsp;or you can just use any node module in your render procedure without using a Themeleon helper.</p>

First, you need to add the dependencies to your `package.json`:

{% highlight json %}
{
  ...

  "dependencies": {
    ...

    "themeleon": "0.*",
    "themeleon-swig": "0.*"
  }
}
{% endhighlight %}

<p class="note  note--warning"><strong>Reminder!</strong> Don't forget to <code>npm install</code>!</p>

Then, we create a `theme` directory *(you can call it as you want)* in
the root of your project. Assuming you already have a [configuration
file](Customising-the-View), and it's at the same level as the `theme`
directory, append this to it:

{% highlight json %}
{
  ...

  "theme": "theme"
}
{% endhighlight %}

You're now telling SassDoc to search for a theme named `theme`. SassDoc
will try to `require` the following until one matches:

* `sassdoc-theme-theme`
* `./theme` (here, `.` the configuration file directory)
* `theme`

To be sure it matches your local directory, you can set the theme to
`./theme`.

When passing a directory to `require`, Node.js will search for an
`index.js` file in it. Your theme module will therefore be in
`theme/index.js`. If you call it differently, you'll have to set the
full file path in `theme`.

The module only have to expose a function implementing the interface
described [above](#introduction). Themeleon will do this for you, and
all you need to do is write a simple function describing the tasks to do
to build the theme.

{% highlight js %}
var themeleon = require('themeleon')(); // Create a theme

themeleon.use('swig'); // Tell the theme to use the `swig` extension

// Themeleon needs to know the theme directory, hence `__dirname`
module.exports = themeleon(__dirname, function (t) {
  t.copy('assets'); // Copy `assets` in destination directory
  // t.copy('assets', 'foo'); // Other name in destination directory

  // Compile a Swig view as `index.html` in destination directory
  t.swig('views/index.html.swig', 'index.html');
});
{% endhighlight %}

The next time you'll render the documentation, your theme function will
be called, copying the `assets` folder in the destination directory, and
rendering your view in `index.html`.

The views are passed a couple of variables [documented here](/data-interface/).

<p class="note  note--info"><strong>Tip:</strong> To kick start your theme, be sure to check <a href="https://github.com/SassDoc/sassdoc-theme-blank">SassDoc's blank theme</a>, a theme with a basic directory structure, and loads of comments to help you understand how it works, and hack it to your own needs.</p>

## Packaging to the World

Now that your awesome theme is ready, you probably want to make it available
to everybody as a `"theme": "your-theme"` line in their
configuration file.

To do this, create a `package.json` in your theme's directory (the one
containing the `index.js`). Give it a name (prefixed with
`sassdoc-theme` in preference), a version, and be sure to require your
dependencies:

{% highlight json %}
{
  "name": "sassdoc-theme-doge",
  "version": "1.3.37",
  "keywords": [
    "sassdoc-theme"
  ],
  "dependencies": {
    "themeleon": "0.*",
    "themeleon-swig": "0.*"
  }
}
{% endhighlight %}

It's a good convention to use the `sassdoc-theme` keyword in you `package.json`
which makes finding and listing SassDoc themes published on `npm` easier.

Then, run `npm publish` and you're done!

<p class="note  note--info"><strong>Note:</strong> the last command will require you to setup an npm account. Run
<code>npm adduser</code> if you haven't an account configured already.</p>

## Bonus

### Play with Swig Extras

If you use Swig, you may want to include additional filters. An
excellent collection of filters is included in `swig-extras`.

To add it to your theme, add `swig` and `swig-extras` as a dependency to
your `package.json`. Then, in your `index.js`:

{% highlight js %}
// Create a local Swig instance instead of altering the globale one
var swig = new (require('swig').Swig)();

var extras = require('swig-extras'); // Moar filters
var themeleon = require('themeleon')(); // No change here

// Use some additional filters
extras.useFilter(swig, 'nl2br');
extras.useFilter(swig, 'split');
extras.useFilter(swig, 'trim');
extras.useFilter(swig, 'groupby');

// Even add your own filters
swig.setFilter('push', function (arr, val) {
    return arr.push(val);
});

// Tell Themeleon to use your own Swig instance
themeleon.use('swig', swig);

module.exports = themeleon(__dirname, function (t) {
  ...
});
{% endhighlight %}
