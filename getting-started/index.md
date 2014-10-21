---
layout: default
title: "Getting started"
---

Getting started with SassDoc could not be any easier.

## Install

{% highlight bash %}
npm install sassdoc -g
{% endhighlight %}

## Write comments

Write [SassDoc compliant comments](/annotations/). The syntax is pretty close to JSDoc's although we took some liberty with it.

## Run SassDoc

{% highlight bash %}
sassdoc <src> <dest> [options]
{% endhighlight %}

...where:

* `<src>` is the path to your Sass folder;
* `<dest>` is the path to the destination folder;
* `[options]` are:

| Option                 | Role                                |
|------------------------|-------------------------------------|
| `--version`            | show version                        |
| `-h`, `--help`         | bring help                          |
| `-v`, `--verbose`      | enable verbose mode                 |
| `-c`, `--config`       | path to JSON/YML configuration file |
| `-t`, `--theme`        | theme to use                        |
| `--sass-convert`       | use if syntax is `.sass`            |
| `--no-update-notifier` | disable update notifier check       |
| `--no-prompt`          | disable all prompts                 |

<p class="note  note--info"><strong>Note:</strong> options <code>--sass-convert</code>, <code>--no-update-notifier</code> and <code>--no-prompt</code> can also be set from the configuration file (set with <code>--config</code>) respectively with <code>sass-convert</code>, <code>no-update-notifier</code> and <code>force</code>.</p>

## Profit

Open the `index.html` file generated at `path/to/dest/folder/`. It should contain your documentation! What about [configuring](/configuration/) and [customising the view](/customising-the-view) a little bit now?
