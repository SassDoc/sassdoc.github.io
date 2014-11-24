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
| `--version`            | Show version.                                                   |
| `-h`, `--help`         | Bring help.                                                     |
| `-v`, `--verbose`      | Enable verbose mode.                                            |
| `-i`, `--interactive`  | Prompt to remove an existing destination directory.             |
| `-f`, `--force`        | Always remove an existing destination directory without asking. |
| `-c`, `--config`       | Path to JSON/YAML configuration file.                           |
| `-t`, `--theme`        | Theme to use.                                                   |
| `--no-update-notifier` | Disable update notifier check.                                  |

[glob expression]: https://github.com/isaacs/node-glob#glob-primer

## Profit

Open the `index.html` file generated at `path/to/dest/folder/`. It should contain your documentation! What about [configuring](/configuration/) and [customising the view](/customising-the-view) a little bit now?
