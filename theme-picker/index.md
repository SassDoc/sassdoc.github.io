---
layout: default
title: test
---

<article class="sassdoc-theme-preview  sassdoc-theme-preview--empty">
  <section class="theme-picker">
    <ul>
    {% for theme in site.data.themes %}
      <li class="theme-picker__item">
        <img src="/theme-picker/thumbs/{{ theme[0] }}.png" alt="{{ theme[0] }}" />
      </li>
    {% endfor %}
    </ul>
  </section>

  <section class="theme-preview">
    <iframe class="theme-picker__previewer" src=""></iframe>
  </section>

  <section class="theme-content">
    <ul>
      <li>Name: <span class="theme-content__name"></span></li>
      <li>Homepage: <a href="" class="theme-content__homepage"></a></li>
      <li>Author: <span class="theme-content__author"></span></li>
      <li>Description: <span class="theme-content__description"></span></li>
      <li>License: <span class="theme-content__license"></span></li>
      <li>Version: <span class="theme-content__version"></span></li>
    </ul>
  </section>
</article>

<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="{{ '/assets/js/ThemePicker.js' | prepend: site.baseurl }}"></script>
<script>
  $(document).ready(function () {
    new ThemePicker({
      themes: {{ site.data.themes | jsonify }}
    });
  })
</script>
