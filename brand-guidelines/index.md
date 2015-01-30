---
layout: default
title: "Brand guidelines"
---

## Brand usage

* Do not stretch, distort or alter the colors of both the logo and the illustration.
* When using the SassDoc brand and identity in your presentations, articles, videos or any other media, please be respectful.
* Stick to [Sass Brand Guidelines](http://sass-lang.com/styleguide/brand) as well.

## Fonts

The main font is [Open Sans](http://www.google.com/fonts/specimen/Open+Sans). The full font-stack is:

{% highlight scss %}
$text-font-stack: 'Open Sans', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
{% endhighlight %}

The code font is Courier New. The full font-stack is:

{% highlight scss %}
$code-font-stack: 'Courier New', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Monaco', monospace;
{% endhighlight %}

## Colors

<ul class="colors">
    <li class="color  color--primary">
        <span class="color__name">$primary-color</span>
        <span class="color__value">#dd5a6f</span>
    </li>

    <li class="color  color--secondary">
        <span class="color__name">$secondary-color</span>
        <span class="color__value">#ffc93c</span>
    </li>

    <li class="color  color--tertiary">
        <span class="color__name">$tertiary-color</span>
        <span class="color__value">#135c6a</span>
    </li>

    <li class="color  color--black">
        <span class="color__name">$black</span>
        <span class="color__value">#333333</span>
    </li>
</ul>

## Logo
<table class="logo-table">
    <tbody>
        <tr>
            <td><img src="{{ site.baseurl }}/assets/images/logo_full_compact.svg" alt="SassDoc Logo, squared & compact version" /></td>
            <td><img src="{{ site.baseurl }}/assets/images/logo_light_compact.svg" alt="SassDoc Logo, light and compact version" /></td>
        </tr>
        <tr>
            <td><a href="{{ site.baseurl }}/assets/images/logo_full_compact.svg" target="_blank">Full Compact Version (.svg)</a></td>
            <td><a href="{{ site.baseurl }}/assets/images/logo_light_compact.svg" target="_blank">Light Compact Version (.svg)</a></td>
        </tr>
        <tr>
            <td><img src="{{ site.baseurl }}/assets/images/logo_full_inline.svg" alt="SassDoc Logo, light and compact version" /></td>
            <td><img src="{{ site.baseurl }}/assets/images/logo_light_inline.svg" alt="SassDoc Logo, light and inline version" /></td>
        </tr>
        <tr>
            <td><a href="{{ site.baseurl }}/assets/images/logo_full_inline.svg" target="_blank">Full Inline Version (.svg)</a></td>
            <td><a href="{{ site.baseurl }}/assets/images/logo_light_inline.svg" target="_blank">Light Inline Version (.svg)</a></td>
        </tr>
    </tbody>
</table>

## Illustration

![PNG Logo]({{ site.baseurl }}/assets/images/illustration.png)

{% include routes.html %}
