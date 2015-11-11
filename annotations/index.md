---
layout: default
title: "Annotations"
---

## Table of content

| Annotation                                 | Description                                                | Aliases                 |
|--------------------------------------------|------------------------------------------------------------|-------------------------|
| [Comment range](#comment-range)            | Comment range                                              | &mdash;                 |
| [Description](#description)                | Description of the documented item                         | &mdash;                 |
| [@access](#access)                         | Access of the documented item                              | &mdash;                 |
| [@alias](#alias)                           | Whether the documented item is an alias of another item    | &mdash;                 |
| [@author](#author)                         | Author of the documented item                              | &mdash;                 |
| [@content](#content)                       | Whether the documented mixin uses the `@content` directive | &mdash;                 |
| [@deprecated](#deprecated)                 | Whether the documented item is deprecated                  | &mdash;                 |
| [@example](#example)                       | Example for the documented item                            | &mdash;                 |
| [@group](#group)                           | Group the documented item belongs to                       | &mdash;                 |
| [@ignore](#ignore)                         | Ignored content                                            | &mdash;                 |
| [@link](#link)                             | Link related to the documented item                        | @source                 |
| [@name](#name)                             | Name of the documented item                                | &mdash;                 |
| [@output](#output)                         | Output from the documented mixin                           | &mdash;                 |
| [@parameter](#parameter)                   | Parameters from the documented mixin or function           | @param, @arg, @argument |
| [@property](#property)                     | Property of the documented map                             | @prop                   |
| [@require](#require)                       | Requirements from the documented item                      | @requires               |
| [@return](#return)                         | Return from the documented function                        | @returns                |
| [@see](#see)                               | Resource related to the documented item                    | &mdash;                 |
| [@since](#since)                           | Changelog for the documented item                          | &mdash;                 |
| [@throw](#throw)                           | Exceptions raised by the documented item                   | @throws, @exception     |
| [@todo](#todo)                             | Things to do related to the documented item                | &mdash;                 |
| [@type](#type)                             | Describes the type of a variable                           | &mdash;                 |

<p class="note  note--info"><strong>Note:</strong> remember that you can define annotations at a file level rather than on specific items, which can happen to be very useful when all items from a file share some traits (author, group, and so on...). To do so, please refer to <a href="{{ site.data.routes.poster_annotations }}">File-level Annotations</a>.</p>

## Comment Range

Each annotated comment will include a `commentRange` object like so:

{% highlight js %}
{
  start: 1,
  end: 3,
}
{% endhighlight %}

... representing the start and end of the comment.

## Description

Describes the documented item.

<h3>Example</h3>

{% highlight scss %}
/// Here is the description
/// On several lines if you will
{% endhighlight %}

### Extra notes

* Parsed as Markdown.*
* Comes on top of a comment, before any annotation.

## @access

| Attribute       | Value                                                  |
|-----------------|--------------------------------------------------------|
| Description     | Defines the access of the documented item              |
| Multiple        | false                                                  |
| Default         | `public`                                               |
| Aliases         | &mdash;                                                |
| Autofilled      | false                                                  |
| OverwritePoster | true                                                   |
| Allowed on      | functions, mixins, placeholders, variables             |
| Extra notes     | Either `public` or `private`.                          |

<h3>Example</h3>

{% highlight scss %}
/// @access private

/// @access public
{% endhighlight %}

## @alias

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Defines if the documented item is an alias of another item |
| Multiple    | false                                                      |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, variables                               |
| Extra notes | The other item will automatically have a key named `aliased` containing the name of aliases. |

<h3>Example</h3>

{% highlight scss %}
/// @alias other-item
{% endhighlight %}

## @author

| Attribute       | Value                                                  |
|-----------------|--------------------------------------------------------|
| Description     | Describes the author of the documented item            |
| Multiple        | true                                                   |
| Default         | &mdash;                                                |
| Aliases         | &mdash;                                                |
| Autofilled      | false                                                  |
| OverwritePoster | true                                                   |
| Allowed on      | functions, mixins, placeholders, variables             |
| Extra notes     | Parsed as Markdown.*                                   |

<h3>Example</h3>

{% highlight scss %}
/// @author Author's name
{% endhighlight %}

## @content

| Attribute   | Value                                                                    |
|-------------|--------------------------------------------------------------------------|
| Description | Describes the usage of `@content` Sass directive in the documented mixin |
| Multiple    | false                                                                    |
| Default     | &mdash;                                                                  |
| Aliases     | &mdash;                                                                  |
| Autofilled  | true                                                                     |
| Allowed on  | mixins                                                                   |
| Extra notes | Parsed as Markdown.*                                                     |

<h3>Example</h3>

{% highlight scss %}
/// @content [Description]
{% endhighlight %}

## @deprecated

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Defines if the documented item is deprecated               |
| Multiple    | false                                                      |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |
| Extra notes | Parsed as Markdown.*<br>Message is optional.               |

<h3>Example</h3>

{% highlight scss %}
/// @deprecated

/// @deprecated Deprecation related message
{% endhighlight %}

## @example

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes a use case for the documented item, with a given language and description if specified |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |
| Extra notes | Lines starting with `@` need to be indented to work correctly.<br>First word on the same line as `@example` is the language for syntax highlighting.<br>Currently supported languages: `css`, `scss`, `markup`, `javascript`. New languages on demand.<br>Everything but the first word on the same line as `@example` is the description.<br>Hyphen before description is optional.<br>Description is parsed as Markdown.* |

<h3>Example</h3>

{% highlight scss %}
/// @example
///   4 + 2 = 8
///   4 / 2 = 2
///
/// @example scss - Clamp function
///   clamp(42, $min: 13, $max: 37)
///   // 37
{% endhighlight %}

<p class="note  note--info"><strong>Tip!</strong> In order to prevent any issue with lines starting with <code>@</code>, it is highly recommended &mdash; yet not mandatory &mdash; to always indent the content of an <code>@example</code> annotation.</p>

## @group

| Attribute   | Value                                                       |
|-------------|-------------------------------------------------------------|
| Description | Defines to which group (if any) the documented item belongs |
| Multiple    | false                                                       |
| Default     | `undefined`                                                 |
| Aliases     | &mdash;                                                     |
| Autofilled  | false                                                       |
| Allowed on  | functions, mixins, placeholders, variables                  |
| Extra notes | Groups define the way items are displayed in SassDoc's default theme.<br>Groups can be aliased for friendly names from the configuration ([more infos]({{ site.data.routes.configuration }}#groups)). |

<h3>Example</h3>

{% highlight scss %}
/// @group helpers
{% endhighlight %}

## @ignore

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Defines a line which won't be documented                   |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |
| Extra notes | &mdash;                                                    |

<h3>Example</h3>

{% highlight scss %}
/// @ignore Message
{% endhighlight %}

## @link

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes a link                                           |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | `@source`                                                  |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |
| Extra notes | Caption is optional.                                       |

<h3>Example</h3>

{% highlight scss %}
/// @link http://some.url
/// @link http://some.url Optional caption
{% endhighlight %}

## @name

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Provide a custom name for the documented item              |
| Multiple    | false                                                      |
| Default     | `item.context.name`                                        |
| Aliases     | &mdash;                                                    |
| Autofilled  | true                                                       |
| Allowed on  | functions, mixins, placeholders, variables                 |
| Extra notes | Only useful when wanting to override the self parsed name. |

<h3>Example</h3>

{% highlight scss %}
/// @name message-[error|warning|success|info]
{% endhighlight %}

## @output

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Provide a description of what's being printed by the mixin |
| Multiple    | false                                                      |
| Default     | &mdash;                                                    |
| Aliases     | `@outputs`                                                 |
| Autofilled  | false                                                      |
| Allowed on  | mixins                                                     |
| Extra notes | Parsed as Markdown.*                                       |

<h3>Example</h3>

{% highlight scss %}
/// @output Description
{% endhighlight %}

## @parameter

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes a parameter of the documented item               |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | `@arg`, `@argument`, `@param`                              |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins                                          |
| Extra notes | Default value is optional.<br>Description is optional. Hyphen before description is optional.<br>Description is parsed as Markdown.*<br>Multiple types should be separated by pipes (`|`). |

<h3>Example</h3>

{% highlight scss %}
/// @param {type} $name
/// @param {type | othertype} $name
/// @param {type} $name - description
/// @param {type} $name [default value] - description
{% endhighlight %}

## @property

| Attribute   | Value                                                             |
|-------------|-------------------------------------------------------------------|
| Description | Document maps properties, use the dot notation to signify nesting |
| Multiple    | true                                                              |
| Default     | &mdash;                                                           |
| Aliases     | `@prop`                                                           |
| Autofilled  | false                                                             |
| Allowed on  | variables                                                         |
| Extra notes | Description is parsed as Markdown.*<br>If `{Type}` is omitted, it will default to `Map` to make it more convenient for nested maps. |

<h3>Example</h3>

{% highlight scss %}
/// @prop {Type} base.default [default] - description
{% endhighlight %}

## @require

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Defines if the documented item requires any other item     |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | `@requires`                                                |
| Autofilled  | true                                                       |
| Allowed on  | functions, mixins, placeholders, variables                 |
| Extra notes | Type is optional; default type is `function`. Can be either `function`, `mixin`, `variable` or `placeholder`.<br>If `{type}` is `variable`, then the `$` sign before the variable name is optional. Alongside if there is a `$` sign before the item name, then the `{variable}` type is optional.<br>If `{type}` is `placeholder`, then the `%` sign before the placeholder name is optional. Alongside if there is a `%` sign before the item name, then the `{placeholder}` type is optional.<br>Description is optional. Hyphen before description is optional.<br>Description is parsed as Markdown.*<br>Link is optional.<br>Item name can contain `::`, `:`, `.` and/or `/` when item is from an external resource.<br>Link is used as a link if present, else it tries to link to an inner item, else it doesn't have a link.<br>The other item will automatically have a key named `usedBy` containing the name of function requiring it. |

<h3>Example</h3>

{% highlight scss %}
/// @require item
/// @require {type} item
/// @require {type} item - description
/// @require {type} item description
/// @require {type} item <link>
/// @require {type} item description <link>
{% endhighlight %}

## @return

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes the return statement of the documented function  |
| Multiple    | false                                                      |
| Default     | &mdash;                                                    |
| Aliases     | `@returns`                                                 |
| Autofilled  | false                                                      |
| Allowed on  | functions                                                  |
| Extra notes | Description is optional. Hyphen before description is optional.<br>Description is parsed as Markdown.*<br>Multiple types must be separated by pipes (`|`). |

<h3>Example</h3>

{% highlight scss %}
/// @return {type}

/// @return {type | othertype}

/// @return {type} description
{% endhighlight %}

## @see

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes an item that is somehow related to the documented item (to describe a dependency, authors should use `@require` instead) |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |
| Extra notes | Type is optional; default type is `function`. Can be either `function`, `mixin`, `variable` or `placeholder`.<br>If `{type}` is `variable`, then the `$` sign before the variable name is optional. Alongside if there is a `$` sign before the item name, then the `{variable}` type is optional.<br>If `{type}` is `placeholder`, then the `%` sign before the placeholder name is optional. Alongside if there is a `%` sign before the item name, then the `{placeholder}` type is optional. |

<h3>Example</h3>

{% highlight scss %}
/// @see other-item
/// @see {mixin} other-item
/// @see $other-item
/// @see %other-item
{% endhighlight %}

## @since

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes the version at which the documented item has been implemented or updated |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |
| Extra notes | Description is optional. Hyphen before description is optional.<br>Description is parsed as Markdown.* |

<h3>Example</h3>

{% highlight scss %}
/// @since version
/// @since version description
{% endhighlight %}

## @throw

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes an error thrown by the documented item           |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | `@throws`, `@exception`                                    |
| Autofilled  | true                                                       |
| Allowed on  | functions, mixins, placeholders                            |
| Extra notes | Parsed as Markdown.*                                       |

<h3>Example</h3>

{% highlight scss %}
/// @throw Error related message
{% endhighlight %}

## @todo

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Defines any task to do regarding the documented item       |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |
| Extra notes | Parsed as Markdown.*                                       |

<h3>Example</h3>

{% highlight scss %}
/// @todo Task to be done
{% endhighlight %}

## @type

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes the type of the documented variable              |
| Multiple    | false                                                      |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | variables                                                  |
| Extra notes | Multiple types should be separated with pipes (`|`).       |

<h3>Example</h3>

{% highlight scss %}
/// @type Bool

/// @type Bool | String
{% endhighlight %}

---

\* The Markdown parsing is effective in compliant themes, by using the Markdown filter from [sassdoc-extras]({{ site.data.routes.extra_tools }}#markdown).

{% include routes.html %}
