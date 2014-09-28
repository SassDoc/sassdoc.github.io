---
layout: default
title: "Getting started"
group: "Getting started"
---

Getting started with SassDoc is really easy.

1 - Install SassDoc.

{% highlight sh %}
npm install sassdoc -g
{% endhighlight %}

2 - [Document your items](/documenting-your-items/). The syntax is pretty close to JSDoc although we took some liberty with it.

3 - Run SassDoc from the CLI (with [extra options](https://github.com/SassDoc/sassdoc#command-line) if you want).

{% highlight sh %}
sassdoc path/to/source/folder path/to/dest/folder
{% endhighlight %}

**Beware!** Destination folder gets wiped. Make sure it does not contain any important file.

4 - Open the `index.html` file generated at `path/to/dest/folder/index.html`. It should contain your documentation!

5 - What about [customising the view](/customising-the-view/) a little bit?
