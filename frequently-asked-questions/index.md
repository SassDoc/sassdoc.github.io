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

*Please not that this might produce small gaps in source files lines references.*

## Can SassDoc generate style guides?

**Nope**. SassDoc is meant to generate documentation, that's all.

## Does SassDoc support CSS classes and IDs ?

**Nope**. Point is to document Sass, not CSS.

## Can SassDoc work with LESS? Stylus? KSS?

**Nope**. It's called SassDoc, not LESSDoc, StylusDoc or KSSDoc.

{% include routes.html %}
