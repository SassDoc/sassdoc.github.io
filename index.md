---
layout: home
title: "Release the docs!"
---

<header role="banner" class="megatron">
    <div class="megatron__top  clearfix">
        <div class="container">
            <img class="megatron__illustration" alt="SassDoc, release the docs!" src="/assets/images/illustration.png" />

            <div class="megatron__content">
{% highlight bash %}
# Install SassDoc globally
npm install sassdoc -g

# Run SassDoc on your project
sassdoc source/ destination/
{% endhighlight %}
            </div>
        </div>
    </div>

    <div class="megatron__bottom">
        <div class="container">
            <div class="megatron__content">
                <a href="/getting-started/" class="button  button--primary  megatron__button">Get started</a><!--
                --><a href="http://twitter.com/share?text=Release+the+docs!+@SassDoc_+is+a+documentation+tool+for+Sass+%E2%80%94&url=http://sassdoc.com" class="button  button--primary  megatron__button" target="_blank">Tweet it</a>
            </div>
        </div>
    </div>
</header>

<section class="home__section">
    <div class="container">

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

        <p><a href="http://github.com/sassdoc/sassdoc">SassDoc</a> parses your source folder to grab <a href="/annotations/">documentation-specific comments</a>. From there, it builds a <a href="/data-interface/">data tree</a>, that gets <a href="/extra-tools/">enhanced and filtered</a> before being passed to the <a href="/customising-the-view/">view</a>. So you end up with a fully styled HTML document located at your destination folder, like this:</p>

        <img src="/assets/images/preview-image.png" alt="SassDoc Default Theme" />
    </div>
</section>

<section class="home__section">
    <div class="container">
        <h2 class="home__section-heading">What they think</h2>

        {% include quotes.html %}
    </div>
</section>
