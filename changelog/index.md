---
layout: default
title: Changelog
---

<script>
(function (global) {
  var request = new XMLHttpRequest();
  var container = document.querySelector('.main > .container');
  var title;
  var error = '<p>Could not retrieve changelog from GitHub. Please <a href="https://github.com/SassDoc/sassdoc/blob/master/CHANGELOG.md" target="_blank">check it</a> directly on the repository.</p>';

  request.open('GET', 'https://api.github.com/repos/SassDoc/sassdoc/contents/CHANGELOG.md', true);
  request.setRequestHeader('Accept', 'application/vnd.github.v3.html+json');
  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      container.innerHTML = request.response;
      title = container.querySelector('h1');
      title.parentNode.removeChild(title);
    }

    else {
      container.innerHTML = error;
    }
  };

  request.onerror = function() {
    container.innerHTML = error;
  };

  request.send(null);

}(window));
</script>