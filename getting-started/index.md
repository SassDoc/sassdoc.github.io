---
layout: default
title: "Getting started"
group: "Getting started"
---

Getting started with SassDoc could not be any easier.

<div class="counter-steps">
<p class="counter-step">Install SassDoc.</p>

{% highlight bash %}
npm install sassdoc -g
{% endhighlight %}

<p class="counter-step">Write comments as specified in <a href="/documenting-your-items/">Documenting Your Items</a>. The syntax is pretty close to JSDoc although we took some liberty with it.</p>

<p class="counter-step">Run SassDoc.</p>

{% highlight bash %}
sassdoc <src> <dest> [options]
{% endhighlight %}

<p>... where:</p>

<ul>
<li><code>&lt;src&gt;</code> is the path to your Sass folder;</li>
<li><code>&lt;dest&gt;</code> is the path to the destination folder.</li>
</ul>

<div class="note  note--danger">
<p><strong>Beware!</strong> Destination folder gets wiped. Make sure it does not contain any important file.</p>
</div>

<p>... and options are:</p>

<table>
  <tbody>
    <tr>
      <td><code>--version</code></td>
      <td>show version</td>
    </tr>
    <tr>
      <td><code>-h, --help</code></td>
      <td>bring help</td>
    </tr>
    <tr>
      <td><code>-v, --verbose</code></td>
      <td>run in verbose mode</td>
    </tr>
    <tr>
      <td><code>-c, --config</code></td>
      <td>path to JSON/YAML configuration file</td>
    </tr>
    <tr>
      <td><code>-t, --theme</code></td>
      <td>theme to be used (will override configuration value)</td>
    </tr>
    <tr>
      <td><code>--sass-convert</code></td>
      <td>convert Sass to SCSS prior to run SassDoc</td>
    </tr>
    <tr>
      <td><code>--no-update-notifier</code></td>
      <td>disable update notifier check</td>
    </tr>
    <tr>
      <td><code>--no-prompt</code></td>
      <td>do not prompt with destination folder check warnings</td>
    </tr>
  </tbody>
</table>

<p class="counter-step">Open the <code>index.html</code> file generated at <code>path/to/dest/folder/index.html</code>. It should contain your documentation!</p>

<p class="counter-step">What about <a href="/customising-the-view/">customising the view</a> a little bit now?</p>
</div>
