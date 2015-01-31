---
layout: default
title: "Frequently Asked Questions"
---

## Does SassDoc work with `.sass` files?

**Yes**. SassDoc automatically detects and converts Sass files to SCSS.

Though you will need Sass (Ruby Sass) v3.4.5 or higher for this to work.
The Sass executable needs to be in your PATH, either globally or locally trough Bundler.
Check it with `sass-convert -v` or `bundle exec sass-convert -v`.

Basically SassDoc first converts your Sass files to SCSS format on the fly (in memory),
then run over this SCSS files to generate documentation, original files are untouched.

<p class="note  note--info">
  <strong>Note:</strong> this might produce small gaps in source files lines references.
</p>

## Can SassDoc generate style guides?

**Nope**. SassDoc is meant to generate documentation, that's all.

## Does SassDoc support CSS classes and IDs ?

**Nope**. Point is to document Sass, not CSS.

## Can SassDoc work with LESS? Stylus? KSS?

**Nope**. It's called SassDoc, not LESSDoc, StylusDoc or KSSDoc.

## What types of comments are supported?

**Inline with three slashes.** We used to support C-style comments (`/**`) but we dropped support in version 2 so we only support inline with 3 slashes (`///`).

## Why does the logo show a type of comment that is not supported?

**As a symbol.** C-style comments with a leading double star has become an icon of comment-based documentation in most languages. This is why we kept it in the logo.

Now, there is a problem with using C-style in Sass: those comments get compiled in the resulting stylesheet. While this is not an issue for regular projects compiled in compressed mode, it becomes a problem with Sass libraries and frameworks. When importing a vendor using SassDoc, resulting stylesheet would be crowded with massive comments. That was particularly annoying for online playground such as [CodePen](http://codepen.io) and [SassMeister](http://sassmeister.com).

{% include routes.html %}
