---
layout: default
title: "Data interface"
group: "Custom theme"
---

SassDoc is doing quite a lot of things under the hood. In most cases, you won't have to know anything about it but if you are willing to write your own theme, you might need to understand what's going on. Especially, you'll need to know what is being returned to the view so that you can actually write your templates.

## Terminology

SassDoc uses the word "item" to describe either a variable, a function, a mixin or a placeholder. Technically speaking, an "item" is an object composed of:

* a description defined at the top of the related documentation block comment, before any annotation;
* a context, which is a sub-object containing the item's name, its type (function, variable, mixin, placeholder), and the item's inner code (inside the declaration braces / variable content);
* annotations: both those declared in the related documentation block comment, and those omitted with a default value.

Note that as a matter of simplicity, all annotations are mapped to an array, even those for which having multiple values makes no sense (for instance `@access`).
{% highlight js %}
{
  "description": "",
  "context": {
    "name": "",
    "type": "",
    "code": ""
  },
  "access": ["public"],
  "group": [["undefined"]]
}
{% endhighlight %}

## Sorting

SassDoc will collect all these item and sort them by `type` like this:
{% highlight js %}
{
 "function" : [{item}, {item}],
 "mixin" : [{item}, {item}],
 "placeholder" : [{item}, {item}],
 "variable" : [{item}, {item}]
}
{% endhighlight %}

## Count

You can access to the number of documented items `data.count`.

## Annotations

<p class="note  note--info"><strong>Clarification:</strong> in the following examples, we are using C-style comments but it works exactly the same for inline comments as well. Please refer to [Documenting your items](http://sassdoc.com/documenting-your-items/) for the syntax.</p>

## @access

Will just return the string after the annotation as the access level.

{% highlight scss %}
/**
 * @access private
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "access" : ["private"]
  [...]
}
{% endhighlight %}

## @alias

Will list the alias in the `alias` key and add the alias item to the `aliased` key in the referenced item.

{% highlight scss %}
/**
 * @alias other-item
 */
 @mixin alias-for-other-item(){ ... }
{% endhighlight %}

Item `alias-for-other-item`:
{% highlight js %}
{
  [...]
  "alias" : ["other-item"]
  [...]
}
{% endhighlight %}

Item `other-item` will look like this:
{% highlight js %}
{
  [...]
  "aliased" : [{
    [...]
    "alias" : ["alias-for-other-item"]
    [...]
  }]
  [...]
}
{% endhighlight %}


## @author

{% highlight scss %}
/**
 * @author Fabrice Weinberg
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "author" : ["Fabrice Weinberg"]
  [...]
}
{% endhighlight %}

## @deprecated

{% highlight scss %}
/**
 * @deprecated No longer in use
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "deprecated" : ["No longer in use"]
  [...]
}
{% endhighlight %}

## @example

{% highlight scss %}
/**
 * @example scss - basic usage
 * clamp(42, $min: 13, $max: 37)
 * // 37
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "example" : [{
    type : "scss",
    description : "basic usage",
    code : "clamp(42, $min: 13, $max: 37)\n // 37"
  }]
  [...]
}
{% endhighlight %}

## @group (since 1.2.0)

{% highlight scss %}
/**
 * @group Groupname
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "group" : [["Groupname"]]
  [...]
}
{% endhighlight %}
The outer array is for multiple `@group` annotations, the inner
array is a list of possibly nested groups. For now you can assume
there will be only one `@group` and no nesting.

## @ignore

This line will be just ignored.

{% highlight scss %}
/**
 * @ignore Ignore the line
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "ignore" : []
  [...]
}
{% endhighlight %}

## @link (synonym: @source)

{% highlight scss %}
/**
 * @link http://example.com Caption
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "link" : [{
    url : "http://example.com",
    caption : "Caption"
  }]
  [...]
}
{% endhighlight %}

## @output (since 1.3.0)

{% highlight scss %}
/**
 * @output Description of output styles
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "output" : ["Description of output styles"]
  [...]
}
{% endhighlight %}

## @param (synonyms: @arg, @argument)

{% highlight scss %}
/**
 * @param {type} $name (default value) - description
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "parameters" : [{
    type : "type",
    name : "name",
    default : "default value",
    description : "description"
  }]
  [...]
}
{% endhighlight %}

## @prop (since 1.5.0)

{% highlight scss %}
/**
 * @prop {Function} base.default (default) - description
 */
{% endhighlight %}

{% highlight js %}
{
  [...]
  "prop" : [{
     type : 'Function',
     path : 'base.default',
     default : 'default',
     description : 'description'
   }]
  [...]
}
{% endhighlight %}

## @requires

The required item will automatically have a key named `usedBy` containing the whole referencing item.

{% highlight scss %}
/**
 * @requires {type} item - description <link>
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "requires" : [{
    type : "type",
    name : "item",
    url : "<link>",
    description : "description",
    item : { The whole required item }
  }]
  [...]
}
{% endhighlight %}

The referenced item will have a `usedBy` key that looks like:
{% highlight js %}
{
  [...]
  "usedBy" : [{
    The whole referencing item
  }]
  [...]
}
{% endhighlight %}

## @returns (synonym: @return)

{% highlight scss %}
/**
 * @returns {type} $name (default value) - description
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "returns" : [{
    type : "type",
    name : "name",
    default : "default value",
    description : "description"
  }]
  [...]
}
{% endhighlight %}

## @since

Describes the version at which the documented item has been implemented or updated.

{% highlight scss %}
/**
 * @since version description
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "since" : [{
    version : "version",
    description : "description"
  }]
  [...]
}
{% endhighlight %}

## @throws (synonym: @throw, @exception)

{% highlight scss %}
/**
 * @throws Error related message
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "throws" : ["Error related message"]
  [...]
}
{% endhighlight %}

## @todo

{% highlight scss %}
/**
 * @todo Task to be done
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "todo" : ["Task to be done"]
  [...]
}
{% endhighlight %}

## @type

{% highlight scss %}
/**
 * @type bool | string
 */
{% endhighlight %}

An item will look like this:
{% highlight js %}
{
  [...]
  "type" : ["bool | string"]
  [...]
}
{% endhighlight %}