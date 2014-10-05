---
layout: default
title: "Node integration"
---

## Installation

{% highlight sh %}
npm install sassdoc --save
{% endhighlight %}

## Either use the raw data

{% highlight js %}
var sassdoc = require('sassdoc');

sassdoc.parse(__dirname + '/sass').then(function (items) {
  console.log(items);
})
{% endhighlight %}

## Or generate documentation

{% highlight js %}
var config = {
  'display': {
    'access': ['public', 'private'],
    'alias': false,
    'watermark': true,
  },

  'package': 'path/to/package.json', // Defaults to `./package.json`
  'theme': 'theme-name', // Defaults to `default`
};

var sassdoc = require('sassdoc');
sassdoc.documentize(source, dest, config);
{% endhighlight %}
