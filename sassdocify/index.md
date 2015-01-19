---
layout: default
title: "SassDocify"
---

## Introduction

SassDocify is a little command-line tool that helps you publishing a [GitHub Pages](https://pages.github.com/) site with your SassDoc-powered documentation. It creates a `gh-pages` branch in the current git repository, and documents the `<src>` directory within it.

<p class="note  note--info">
  SassDocify is a shell script and will work only on Unix systems (tested successfully on MacOS, Linux and BSD). If you run Windows, you can still use it through MinGW or a similar Unix tool set for Windows, though this haven't ben tested.
</p>

## Installation

{% highlight sh %}
npm install -g sassdocify
{% endhighlight %}

## Usage

{% highlight sh %}
sassdocify [options] [<src>]
{% endhighlight %}

If `<src>` is not given, it's set to the current directory.

## Options

| Option            | Role                        |
|-------------------|-----------------------------|
| `-h`, `--help`    | Show help.                  |
| `-V`, `--version` | Show version.               |
| `-m`, `--message` | Set the Git commit message. |

## Examples

Document current directory in a `gh-pages` branch of the current repository.

{% highlight sh %}
sassdocify
{% endhighlight %}

Use custom SassDoc options:

{% highlight sh %}
SASSDOC='sassdoc --verbose' sassdocify
{% endhighlight %}

Give the source directory:

{% highlight sh %}
sassdocify stylesheets
{% endhighlight %}

Custom Git commit message:

{% highlight sh %}
sassdocify -m 'New SassDoc theme'
{% endhighlight %}
