---
layout: default
title: "Node integration"
---

If you want to integrate SassDoc in a build process but do not use [Grunt](/grunt/), [Gulp](/gulp/) or [Broccoli](/broccoli/), you can still use SassDoc with nothing but Node.

## Installation

{% highlight sh %}
npm install sassdoc --save
{% endhighlight %}

## Using raw data

If you are not interested in generating the documentation but only want to access the raw data, it is as easy as using the `parse` method accepting a folder (of Sass/SCSS files) and returning a promise yielding documented items.

It's up to you to do whatever you want with this!

{% highlight js %}
var sassdoc = require('sassdoc');

sassdoc.parse(__dirname + '/your-sass-folder').then(function (data) {
  console.log(data);
})
{% endhighlight %}

## Generating documentation

Or if you want to use SassDoc at its best and generate the whole documentation from Node, you can use the `documentize` function that returns a promise and accepts 3 arguments: the source folder, the destination folder, and a configuration object (which is optional).

{% highlight js %}
// Require SassDoc main function
var sassdoc = require('sassdoc').default;

// Generate docs
// @param {String} source - path to source
// @param {String} destination - path to description
// @param {Object} configuration - configuration object
// @return {Promise}
sassdoc(source, destination, configuration).then(function () {
  console.log('Your documentation has been generated!');
}, function (err) {
  console.error(err);
});
{% endhighlight %}
