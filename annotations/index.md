---
layout: default
title: "Annotations"
---

| Annotation | Description |
|------------|-------------|
| [Name](#name) | Name of the documented item |
| [Description](#description) | Description of the documented item |
| [@access](#access) | Access of the documented item |
| [@alias](#alias) | Whether the documented item is an alias of another item |
| [@author](#author) | Author of the documented item |
| [@content](#content) | Whether the documented mixin uses the `@content` directive |
| [@deprecated](#deprecated) | Whether the documented item is deprecated |
| [@example](#example) | Example for the documented item |
| [@group](#group) | Group the documented item belongs to |
| [@ignore](#ignore) | Ignored content |
| [@link (@source)](#link-synonym-source) | Link related to the documented item |
| [@output](#output) | Output from the documented mixin |
| [@parameter (@param, @arg, @argument)](#param-synonyms-arg-argument) | Parameters from the documented mixin or function |
| [@property (@prop)](#prop) | Property of the documented map |
| [@require (@requires)](#requires) | Requirements from the documented item |
| [@return (@returns)](#returns-synonym-return) | Return from the documented function |
| [@see](#see) | Resource related to the documented item |
| [@since](#since) | Changelog for the documented item |
| [@throw (@throws, @exception)](#throws-synonym-throw-exception) | Exceptions raised by the documented item |
| [@todo](#todo) | Things to do related to the documented item |

<p class="note  note--info"><strong>Note:</strong> remember that you can define annotations at a file level rather than on specific items, which can happen to be very useful when all items from a file share some traits (author, group, and so on...). To do so, please refer to <a href="/file-level-annotations/">File-level Annotations</a>.</p>

## Name

Name of the documented item is self parsed, hence `@name` doesn't exist.

## Description

Describes the documented item.

## CommentRange

Each annotated comment will include a object like:

```js
{
  start : 1,
  end : 3
}
```

representing the start and end of the comment.


### Example

{% highlight scss %}
/**
 * Here is the description
 * On several lines if you will
 */
{% endhighlight %}

{% highlight scss %}
/// Here is the description
/// On several lines if you will
{% endhighlight %}

### Extra notes

* Parsed as Markdown.*
* Comes on top of a comment, before any annotation.

## @access

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Defines the access of the documented item                  |
| Multiple    | false                                                      |
| Default     | `public`                                                   |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |

### Example

{% highlight scss %}
/**
 * @access private
 */

/**
 * @access public
 */
{% endhighlight %}

{% highlight scss %}
/// @access private

/// @access public
{% endhighlight %}

### Extra notes

* Either `public` or `private`.

## @alias

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Defines if the documented item is an alias of another item |
| Multiple    | false                                                      |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, variables                               |

### Example

{% highlight scss %}
/**
 * @alias other-item
 */
{% endhighlight %}

{% highlight scss %}
/// @alias other-item
{% endhighlight %}

### Extra notes

* The other item will automatically have a key named `aliased` containing the name of aliases.

## @author

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes the author of the documented item                |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |

### Example

{% highlight scss %}
/**
 * @author Author's name
 */
{% endhighlight %}

{% highlight scss %}
/// @author Author's name
{% endhighlight %}

### Extra notes

* Parsed as Markdown.*

## @content

| Attribute   | Value                                                                    |
|-------------|--------------------------------------------------------------------------|
| Description | Describes the usage of `@content` Sass directive in the documented mixin |
| Multiple    | false                                                                    |
| Default     | &mdash;                                                                  |
| Aliases     | &mdash;                                                                  |
| Autofilled  | true                                                                     |
| Allowed on  | mixins                                                                   |

### Example

{% highlight scss %}
/**
 * @content [Description]
 */
{% endhighlight %}

{% highlight scss %}
/// @content [Description]
{% endhighlight %}

### Extra notes

* Parsed as Markdown.*

## @deprecated

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Defines if the documented item is deprecated               |
| Multiple    | false                                                      |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |

### Example

{% highlight scss %}
/**
 * @deprecated
 */

/**
 * @deprecated Deprecation related message
 */
{% endhighlight %}

{% highlight scss %}
/// @deprecated

/// @deprecated Deprecation related message
{% endhighlight %}

### Extra notes

* Message is optional.
* Parsed as Markdown.*

## @example

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes a use case for the documented item, with a given language and description if specified |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |

### Example

{% highlight scss %}
/**
 * @example
 * 4 + 2 = 8
 * 4 / 2 = 2
 *
 * @example scss
 * // This is some SCSS code
 *
 * @example scss - Clamp function
 * clamp(42, $min: 13, $max: 37)
 * // 37
 */
{% endhighlight %}

{% highlight scss %}
/// @example
/// 4 + 2 = 8
/// 4 / 2 = 2
///
/// @example scss - Clamp function
/// clamp(42, $min: 13, $max: 37)
/// // 37
{% endhighlight %}

### Extra notes

* Lines starting with `@` need to be indented to work correctly.
* First word on the same line as `@example` is the language for syntax highlighting.
* Currently supported languages: `css`, `scss`, `markup`, `javascript`. New languages on demand.
* Everything but the first word on the same line as `@example` is the description.
* Hyphen before description is optional.
* Description is parsed as Markdown.*

## @group

| Attribute   | Value                                                       |
|-------------|-------------------------------------------------------------|
| Description | Defines to which group (if any) the documented item belongs |
| Multiple    | false                                                       |
| Default     | `undefined`                                                 |
| Aliases     | &mdash;                                                     |
| Autofilled  | false                                                       |
| Allowed on  | functions, mixins, placeholders, variables                  |

### Example

{% highlight scss %}
/**
 * @group helpers
 */
{% endhighlight %}

{% highlight scss %}
/// @group helpers
{% endhighlight %}

### Extra notes

* Groups define the way items are displayed in SassDoc's default theme.
* Groups can be aliased for friendly names from the configuration ([more infos](/configuration/#groups)).

## @ignore

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Defines a line which won't be documented                   |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |

### Example

{% highlight scss %}
/**
 * @ignore Message
 */
{% endhighlight %}

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

### Example

{% highlight scss %}
/**
 * @link http://some.url
 * @link http://some.url Optional caption
 */
{% endhighlight %}

{% highlight scss %}
/// @link http://some.url
/// @link http://some.url Optional caption
{% endhighlight %}

### Extra notes

* Caption is optional.

## @output

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Provide a description of what's being printed by the mixin |
| Multiple    | false                                                      |
| Default     | &mdash;                                                    |
| Aliases     | `@outputs`                                                  |
| Autofilled  | false                                                      |
| Allowed on  | mixins                                                     |

### Example

{% highlight scss %}
/**
 * @output Description
 */
{% endhighlight %}

{% highlight scss %}
/// @output Description
{% endhighlight %}

### Extra notes

* Description is parsed as Markdown.*

## @parameter

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes a parameter of the documented item               |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | `@arg`, `@argument`, `@param`                              |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins                                          |

### Example

{% highlight scss %}
/**
 * @param {type} $name
 * @param {type | othertype} $name
 * @param {type} $name - description
 * @param {type} $name (default value) - description
 */
{% endhighlight %}

{% highlight scss %}
/// @param {type} $name
/// @param {type | othertype} $name
/// @param {type} $name - description
/// @param {type} $name (default value) - description
{% endhighlight %}

### Extra notes

* Default value is optional.
* Description is optional. Hyphen before description is optional.
* Description is parsed as Markdown.*
* Multiple types should be separated by pipes (`|`).

## @property

| Attribute   | Value                                                             |
|-------------|-------------------------------------------------------------------|
| Description | Document maps properties, use the dot notation to signify nesting |
| Multiple    | true                                                              |
| Default     | &mdash;                                                           |
| Aliases     | `@prop`                                                           |
| Autofilled  | false                                                             |
| Allowed on  | variables                                                         |

### Example

{% highlight scss %}
/**
 * @prop {Type} base.default (default) - description
 */
{% endhighlight %}

{% highlight scss %}
/// @prop {Type} base.default (default) - description
{% endhighlight %}

### Extra notes

* Description is parsed as Markdown.*
* If `{Type}` is omitted, it will default to `Map` to make it more convenient for nested maps.

## @require

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Defines if the documented item requires any other item     |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | `@requires`                                                |
| Autofilled  | true                                                       |
| Allowed on  | functions, mixins, placeholders, variables                 |

### Example

{% highlight scss %}
/**
 * @require item
 * @require {type} item
 * @require {type} item - description
 * @require {type} item description
 * @require {type} item <link>
 * @require {type} item description <link>
 */
{% endhighlight %}

{% highlight scss %}
/// @require item
/// @require {type} item
/// @require {type} item - description
/// @require {type} item description
/// @require {type} item <link>
/// @require {type} item description <link>
{% endhighlight %}

### Extra notes

* Type is optional; default type is `function`.
* Description is optional. Hyphen before description is optional.
* Description is parsed as Markdown.*
* Link is optional.
* Item name can contain `::`, `:`, `.` and/or `/` when item is from an external resource.
* Link is used as a link if present, else it tries to link to an inner item, else it doesn't have a link.
* If `{type}` is `variable`, then the `$` sign before the variable name is optional. Alongside if there is a `$` sign before the item name, then the `{variable}` type is optional.
* If `{type}` is `placeholder`, then the `%` sign before the placeholder name is optional. Alongside if there is a `%` sign before the item name, then the `{placeholder}` type is optional.
* The other item will automatically have a key named `usedBy` containing the name of function requiring it.

## @return

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes the return statement of the documented function  |
| Multiple    | false                                                      |
| Default     | &mdash;                                                    |
| Aliases     | `@returns`                                                  |
| Autofilled  | false                                                      |
| Allowed on  | functions                                                  |

### Example

{% highlight scss %}
/**
 * @return {type}
 */

/**
 * @return {type | othertype}
 */

/**
 * @return {type} description
 */
{% endhighlight %}

{% highlight scss %}
/// @return {type}

/// @return {type | othertype}

/// @return {type} description
{% endhighlight %}

### Extra notes

* Description is optional. Hyphen before description is optional.
* Description is parsed as Markdown.*
* Multiple types must be separated by pipes (`|`).

## @see

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes an item that is somehow related to the documented item (to describe a dependency, authors should use `@require` instead) |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |

### Example

{% highlight scss %}
/**
 * @see other-item
 * @see {mixin} other-item
 * @see $other-item
 * @see %other-item
 */
{% endhighlight %}

{% highlight scss %}
/// @see other-item
/// @see {mixin} other-item
/// @see $other-item
/// @see %other-item
{% endhighlight %}

### Extra notes

* Type is optional; default type is `function`.
* If `{type}` is `variable`, then the `$` sign before the variable name is optional. Alongside if there is a `$` sign before the item name, then the `{variable}` type is optional.
* If `{type}` is `placeholder`, then the `%` sign before the placeholder name is optional. Alongside if there is a `%` sign before the item name, then the `{placeholder}` type is optional.

## @since

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes the version at which the documented item has been implemented or updated |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |

### Example

{% highlight scss %}
/**
 * @since version
 * @since version description
 */
{% endhighlight %}

{% highlight scss %}
/// @since version
/// @since version description
{% endhighlight %}

### Extra notes

* Description is optional. Hyphen before description is optional.
* Description is parsed as Markdown.*

## @throw

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes an error thrown by the documented item           |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | `@throws`, `@exception`                                    |
| Autofilled  | true                                                       |
| Allowed on  | functions, mixins, placeholders                            |

### Example

{% highlight scss %}
/**
 * @throw Error related message
 */
{% endhighlight %}

{% highlight scss %}
/// @throw Error related message
{% endhighlight %}

### Extra notes

* Description is parsed as Markdown.*

## @todo

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Defines any task to do regarding the documented item       |
| Multiple    | true                                                       |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | functions, mixins, placeholders, variables                 |

### Example

{% highlight scss %}
/**
 * @todo Task to be done
 */
{% endhighlight %}

{% highlight scss %}
/// @todo Task to be done
{% endhighlight %}

### Extra notes

* Description is parsed as Markdown.*

## @type

| Attribute   | Value                                                      |
|-------------|------------------------------------------------------------|
| Description | Describes the type of the documented variable              |
| Multiple    | false                                                      |
| Default     | &mdash;                                                    |
| Aliases     | &mdash;                                                    |
| Autofilled  | false                                                      |
| Allowed on  | variables                                                  |

### Example

{% highlight scss %}
/**
 * @type Bool
 */

/**
 * @type Bool | String
 */
{% endhighlight %}

{% highlight scss %}
/// @type Bool

/// @type Bool | String
{% endhighlight %}

### Extra notes

* Multiple types should be separated with pipes (`|`).

---

\* The Markdown parsing is effective in compliant themes, by using the Markdown filter from [sassdoc-extras](/extra-tools/#markdown).
