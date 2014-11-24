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

* `<src>` is the path to your Sass folder or a [glob expression] to SCSS/Sass files;
* `<dest>` is the path to the destination folder;
* `[options]` are:

| Option                 | Role                                                           |
|------------------------|----------------------------------------------------------------|
| `-h`, `--help`         | bring help                                                     |
| `--version`            | show version                                                   |
| `-v`, `--verbose`      | enable verbose mode                                            |
| `-i`, `--interactive`  | prompt to remove an existing destination directory             |
| `-f`, `--force`        | always remove an existing destination directory without asking |
| `-c`, `--config`       | path to JSON/YAML configuration file                           |
| `-t`, `--theme`        | theme to use                                                   |
| `--no-update-notifier` | disable update notifier check                                  |

[glob expression]: https://github.com/isaacs/node-glob#glob-primer

## Profit

Open the `index.html` file generated at `path/to/dest/folder/`. It should contain your documentation! What about [configuring](/configuration/) and [customising the view](/customising-the-view) a little bit now?
