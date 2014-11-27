---
layout: default
title: "Theme generator"
---

## Features

[Yeoman](http://yeoman.io) generator that scaffolds out a SassDoc theme.

* Let you chose your preferred template engine.
* Build the theme views and `index.js` based on prompts.
* Default Sass starter structure.
* Let you use a pre-defined Grunt or Gulp workflow.
* Templates loaded with examples and comments.

## Usage

Install `generator-sassdoc-theme`:

{% highlight bash %}
npm install -g generator-sassdoc-theme
{% endhighlight %}

Make a new theme directory, and `cd` into it:

{% highlight bash %}
mkdir my-new-theme && cd $_
{% endhighlight %}

Run `yo sassdoc-theme`, optionally passing a theme name:

{% highlight bash %}
yo sassdoc-theme [options] [<themeName>]
{% endhighlight %}

## Options

* `--init`: Force to prompt question and re-initialize `.yo-rc.json`.
* `--skip-install`: Skips the automatic execution of `npm` after
  scaffolding has finished.
* `--theme-engine=[engine]`: Template engine (defaults to `swig`). Supported engines: `jade`, `swig`, `nunjucks`, `handlebars`

## Sub generators

<code>generator-sassdoc-theme</code> is divided into sub-generators, hence you have to possibility
to call them directly in cases where you would like a certain functionality without bootstraping
a full theme generation.

Views: generates <code>index.js</code> and views templates.
Example:
{% highlight bash %}
yo sassdoc-theme:jade
{% endhighlight %}

Task runnners: generates <code>Gruntfile.js | Gulpfile.js</code> and <code>package.json</code>.
Example:
{% highlight bash %}
yo sassdoc-theme:grunt
{% endhighlight %}

<p class="note  note--danger">
  <strong>Caution!</strong>
  Running a sub-generator on an existing theme, will override the corresponding files.
  Although Yeoman will prompt you for confirmation before doing so.
</p>
