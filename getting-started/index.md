---
layout: default
title: "Command line"
---

## Install

Getting started with SassDoc could not be any easier.

{% highlight bash %}
npm install sassdoc -g
{% endhighlight %}

## Comments

Write [SassDoc compliant comments][annotations]. The syntax is pretty close to JSDoc's although we took some liberty with it.

## SassDoc command

{% highlight bash %}
sassdoc <src>... [options]
sassdoc [options]
{% endhighlight %}

... where:

* `<src>` is the path to one or more Sass folders or [glob expressions](https://github.com/isaacs/node-glob#glob-primer) to SCSS/Sass files; if not given, SassDoc will read from stdin;
* `[options]` are the [options](#options).

## Options

| Option                 | Role                                            |
|------------------------|-------------------------------------------------|
| `-h`, `--help`         | Bring help.                                     |
| `--version`            | Show version.                                   |
| `-v`, `--verbose`      | Enable verbose mode.                            |
| `-d`, `--dest`         | Documentation folder [default: sassdoc].        |
| `-c`, `--config`       | Path to JSON/YAML configuration file.           |
| `-t`, `--theme`        | Theme to use.                                   |
| `-p`, `--parse`        | Parse the input and output JSON data to stdout. |
| `--no-update-notifier` | Disable update notifier check.                  |
| `--strict`             | Turn warnings into errors.                      |
| `--debug`              | Output debugging information.                   |

## Profit

Open the `index.html` file generated in the `sassdoc` directory (or the path you gave to `--dest`). It should contain your documentation! What about [configuring][configuration] and [customising the view][view] a little bit now?

{% include routes.html %}
