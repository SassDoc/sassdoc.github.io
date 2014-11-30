---
layout: default
title: "Frequently Asked Questions"
---

## Does SassDoc work with `.sass` files?

Yes. You have to use the `--sass-convert` option. However note that Sass v3.4.5 is required for this to work.

Basically SassDoc first converts your Sass folder in SCSS at a temporary location, then run over this SCSS code base to generate documentation, only to delete the temporary folder once done.

## Can SassDoc generate style guides?

Nope. SassDoc is meant to generate documentation, that's all.

## Does SassDoc support CSS classes and IDs ?

Nope. Point is to document Sass, not CSS.

## Can SassDoc work with LESS? Stylus? KSS?

Nope. It's called SassDoc, not LESSDoc, StylusDoc or KSSDoc.

{% include routes.html %}
