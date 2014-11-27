---
layout: default
title: "Contributing"
---

## How to contribute?

There are many things you can do to contribute SassDoc:

* Report a bug;
* Fix a bug or implement a new feature;
* Suggest a new feature;
* Improve the documentation.

## Asking a question

Please, do not open an issue only to ask a question; it is not the best place for this. First, make sure your question is not already answered in the documentation, especially in the [Frequently Asked Questions](/frequently-asked-questions/) section.

If it's not, you can leave your question on:

* [#sassdoc on freenode](http://webchat.freenode.net/)
* [SassDoc on Slack](http://sassdoc.slack.com/)

If you need a quick reply or don't feel really comfortable with asking on a public channel, try getting in touch with us on Twitter when possible: [@SassDoc\_](https://twitter.com/sassdoc_), the official account.

## Filling a bug

So you think you've found a bug? Likely. We're all humans after all! Before even opening an issue, you have to know how SassDoc is architectured so you can submit an issue in the accurate repository:

* [Core](https://github.com/sassdoc/sassdoc): Main API
* [Theme](https://github.com/sassdoc/sassdoc-theme-default): Theme, templates and styles
* [Extras](https://github.com/sassdoc/sassdoc-extras): Extra tools for theme authors
* [Grunt plugin](https://github.com/sassdoc/grunt-sassdoc): Grunt integration
* [Gulp plugin](https://github.com/sassdoc/gulp-sassdoc): Gulp integration
* [Broccoli plugin](https://github.com/sassdoc/broccoli-sassdoc): Broccoli integration
* [Yeoman theme generator](https://github.com/sassdoc/generator-sassdoc-theme): theme generator
* [Site](https://github.com/SassDoc/sassdoc.github.io): SassDoc's site
* [Syntax converter](https://github.com/SassDoc/sass-convert): Sass to SCSS converter and the like

Please give GitHub's search a try first, to make sure someone didn't already submit something similar. If what you've found seems unique, be sure to open an issue in the appropriate repository with a clear title and a description as complete as possible.

<p class="note  note--warning"><strong>Tip!</strong> Avoid titles like "it doesn't work", "please help me", or "bug with sassdoc". It doesn't help much understanding the problem at first glance.</p>

Similarly, be as descriptive as possible within your description. If you have a stack trace, post it. If you can make a screenshot, even better! Explain the problem and how you got there so we can reproduce it. Only then we'll be able to investigate.

## Submitting a pull request

Want to contribute? Awesome!

If it's a little something like typo, styles or wording, feel free to jump on it and submit a pull request; chances are high it will be quickly merged.

If you are thinking of something a bit more complex, be sure to talk with someone from the team before even starting coding in order to avoid any useless work. Also be sure to read our [code guidelines](https://github.com/SassDoc/sassdoc/blob/develop/GUIDELINES.md).

New features or sizeable refactors should be based on the `develop` branch while bugfixes should head into both `master` and `develop`.

Anyway, thank you very much for contributing!
