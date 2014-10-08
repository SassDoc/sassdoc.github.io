---
layout: default
title: "Theme Picker"
---

<article class="sassdoc-theme-preview  sassdoc-theme-preview--empty">
  <section class="theme-picker">
    <h2>Click a theme to preview it</h2>
    <ul class="theme-picker__list">
    {% for theme in site.data.themes %}
      <li class="theme-picker__item" data-theme-name="{{ theme[0] }}">
        <img src="/theme-picker/thumbs/{{ theme[0] }}.png" alt="{{ theme[0] }}" />
        <div class="theme-picker__metadata  metadata">
          <ul class="metadata__list">
            <li class="metadata__item">
              {% if theme[1].homepage %}
              <a href="{{ theme[1].homepage }}">{{ theme[1].title|default(theme[1].name) }}</a>
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
    <h2>Preview</h2>
    <iframe class="theme-preview__frame" src=""></iframe>
  </section>
</article>

<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="{{ '/assets/js/ThemePicker.js' | prepend: site.baseurl }}"></script>
<script>
  $(document).ready(function () {
    new ThemePicker();
  })
</script>
