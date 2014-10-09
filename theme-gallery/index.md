---
layout: default
title: "Theme Gallery"
---

<article class="sassdoc-theme-preview  sassdoc-theme-preview--empty">
  <p>SassDoc officially has a single theme, but it also provides a simple and powerful theming engine to help authors <a href="/using-your-own-theme">build their own theme</a>. If you have built a theme or know one that's not featured here, be sure to suggest it!</p>

  <section class="theme-picker">
    <h2>Click to preview</h2>
    <ul class="theme-picker__list">
    {% for theme in site.data.themes %}
      <li class="theme-picker__item" data-theme-name="{{ theme[0] }}">
        <img src="/theme-gallery/thumbs/{{ theme[0] }}.png" alt="{{ theme[0] }}" />
        <div class="theme-picker__metadata  metadata">
          <ul class="metadata__list">
            <li class="metadata__item">
              {% if theme[1].homepage %}
              <a href="{{ theme[1].homepage }}" target="_blank">{{ theme[1].title|default(theme[1].name) }}</a>
              {% else %}
              <span>{{ theme[1].title|default(theme[1].name) }}</span>
              {% endif %}
            </li>
            <li class="metadata__item">
              {% if theme[1].author %}
                {% if theme[1].author.name %}
                  {{ theme[1].author.name }}
                {% else %}
                  {{ theme[1].author }}
                {% endif %}
              {% else %}
                unknown
              {% endif %}
            </li>
            <li class="metadata__item">{{ theme[1].version|default('0.0.0') }}</li>
          </ul>
        </div>
      </li>
    {% endfor %}
    </ul>
  </section>

  <section class="theme-preview">
    <h2>Preview Theme
      <span class="theme-preview__name" data-inject-theme-name></span>
      <button class="theme-preview__fullscreen-button">Fullscreen</button>
    </h2>
    <iframe class="theme-preview__frame" frameborder="0" src=""></iframe>
    <button class="theme-preview__fullscreen-close">Close fullscreen &times;</button>
  </section>

  <section class="theme-code">
    <h2>Use this theme</h2>
    <pre class="highlight"><code>sassdoc --theme <span data-inject-theme-name class="theme-code__name"></span> src dest</code></pre>
  </section>
</article>

<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="{{ '/assets/js/ThemePicker.js' | prepend: site.baseurl }}"></script>
<script>
  $(document).ready(function () {
    new ThemePicker();
  })
</script>
