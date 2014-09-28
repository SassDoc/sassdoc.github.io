---
layout: default
title: "Theme generator"
---

[Yeoman](http://yeoman.io) generator that scaffolds out a SassDoc theme.

## Features

* Let you chose your preferred template engine
* Build the theme views and `index.js` based on prompts
* Default Sass starter structure
* Let you use a pre-defined Grunt or Gulp workflow
* Templates loaded with examples and comments

## Usage

Install `generator-sassdoc-theme`:

{% highlight sh %}
npm install -g generator-sassdoc-theme
{% endhighlight %}

Make a new theme directory, and `cd` into it:

{% highlight sh %}
mkdir my-new-theme && cd $_
{% endhighlight %}

Run `yo sassdoc-theme`, optionally passing a theme name:

{% highlight sh %}
yo sassdoc-theme [options] [<themeName>]
{% endhighlight %}

## Options

* `--init`: Force to prompt question and re-initialize `.yo-rc.json`.
* `--skip-install`: Skips the automatic execution of `npm` after
  scaffolding has finished.
* `--theme-engine=[engine]`: Template engine (defaults to `swig`). Supported engines: `jade`, `swig`, `nunjucks`, `handlebars`
