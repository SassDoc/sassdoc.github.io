---
layout: default
title: "SassDocify"
---

## Introduction

SassDocify is a little command-line tool that helps you publishing a [GitHub Pages](https://pages.github.com/) site with your SassDoc-powered documentation. It creates a `gh-pages` branch in the current git repository, and documents the `src` directory within it.

## Installation

With `npm`:

{% highlight bash %}
$ npm install -g sassdocify
{% endhighlight %}

Systemwide installation:

{% highlight bash %}
$ make install
{% endhighlight %}

User installation, assuming you have ~/.local/bin in your PATH:

{% highlight bash %}
$ make install PREFIX=~/.local
{% endhighlight %}

Development installation (set sassdocify's bin  directory  directly  in your PATH):

{% highlight bash %}
$ export PATH="$PWD/bin:$PATH"
{% endhighlight %}

Or more persistent version (need logout):

{% highlight bash %}
$ echo "export PATH='$PWD/bin:\$PATH'" >> ~/.profile
{% endhighlight %}

## Usage

{% highlight bash %}
sassdocify [options] [src]
{% endhighlight %}

If `src` is not given, it's set to the current directory.

## Options

{% highlight bash %}
-h, --help
      Show help.

-V, --version
      Show version.

-m msg, --message=msg
      Set the git-commit(1) message.
{% endhighlight %}

## Examples

Document current directory in a gh-pages branch of the current repository.

{% highlight bash %}
$ sassdocify
{% endhighlight %}

Use custom SassDoc options:

{% highlight bash %}
$ SASSDOC='sassdoc --verbose' sassdocify
{% endhighlight %}

Give the source directory:

{% highlight bash %}
$ sassdocify stylesheets
{% endhighlight %}

Custom git commit message:

{% highlight bash %}
$ sassdocify -m 'New SassDoc theme'
{% endhighlight %}
