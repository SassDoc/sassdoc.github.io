---
layout: default
title: "Gallery"
---

Do you know a SassDoc project that's not in this list? Please report it or submit a [pull request](https://github.com/SassDoc/sassdoc.github.io/pulls)!

<ul class="gallery">
{% for item in site.data.gallery %}
  <li class="gallery__item">
    <a class="gallery__link" href="{{ item.url }}" target="_blank">
      <img class="gallery__preview" src="{{ site.baseurl }}/assets/images/gallery/{{ item.image }}" alt="{{ item.name }}" />
      <h2 class="gallery__name">{{ item.name }}</h2>
    </a>
  </li>
{% endfor %}
</ul>

{% include routes.html %}
