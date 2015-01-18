---
layout: home
title: "Release the docs!"
---

<div class="megatron">
    <div class="megatron__top  clearfix">
        <div class="container">
            <img class="megatron__illustration" alt="SassDoc, release the docs!" src="{{ site.baseurl }}/assets/images/illustration.png" />

            <div class="megatron__content">
{% highlight bash %}
# Ensure npm 2.0 is installed (required for SassDoc)
npm install npm@latest -g

# Install SassDoc globally
npm install sassdoc -g

# Run SassDoc on your project
sassdoc source/
{% endhighlight %}
            </div>
        </div>
    </div>

    <div class="megatron__bottom">
        <div class="container">
            <div class="megatron__content">
                <a href="{{ site.baseurl }}/getting-started/" class="button  button--primary  megatron__button">Get started</a><!--
                --><a href="http://twitter.com/share?text=Release+the+docs!+@SassDoc_+is+a+documentation+tool+for+Sass+%E2%80%94&url=http://sassdoc.com" class="button  button--primary  megatron__button" target="_blank">Tweet it</a>
            </div>
        </div>
    </div>
</div>

<section class="home__section">
    <div class="container">

        <p class="note  note--warning">
          <strong>Warning:</strong> this is a preview of SassDoc 2.0 which is still a beta release. See the <a href="{{ site.data.routes.changelog }}">changelog</a> to see what's new, and don't forget to check the <a href="{{ site.data.routes.upgrading }}">upgrading instructions</a> if you're currently using SassDoc 1.0.
        </p>

        <p>SassDoc is to Sass what JSDoc is to JavaScript: a documentation system to build pretty and powerful docs in the blink of an eye. Among other things, SassDoc is:</p>

        <ul>
            <li>usable out of the box;</li>
            <li>highly customisable;</li>
            <li>blazingly fast;</li>
            <li>fully themable;</li>
            <li>integrated with Grunt/Gulp/Broccoli or directly Node.</li>
        </ul>
    </div>
</section>

<section class="home__section">
    <div class="container">
        <h2 class="home__section-heading">How it works</h2>
    </div>
    <div class="home__section-content">
        <div class="container">

            <p><a href="http://github.com/sassdoc/sassdoc">SassDoc</a> parses your source folder to grab <a href="{{ site.data.routes.annotations }}">documentation-specific comments</a>. From there, it builds a <a href="{{ site.data.routes.data_interface }}">data tree</a>, that gets <a href="{{ site.data.routes.extra_tools }}">enhanced and filtered</a> before being passed to the <a href="{{ site.data.routes.view }}">view</a>. So you end up with a fully styled HTML document, like this:</p>

            <img src="{{ site.baseurl }}/assets/images/preview-image.png" alt="SassDoc Default Theme" />
        </div>
    </div>
</section>

<section class="home__section">
    <div class="container">
        <h2 class="home__section-heading">What they say</h2>
    </div>
    <div class="home__section-content">
        <div class="container">
            {% include quotes.html %}
        </div>
    </div>
</section>

<section class="home__section  home__section--catcher">
    <div class="home__section-content">
        <p class="container">All <a href="{{ site.baseurl }}/gallery/">these projects</a> are documented with SassDoc. What are you waiting for to make your own?</p>
    </div>
</section>
