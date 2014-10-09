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
| [@param (@arg, @argument)](#param-synonyms-arg-argument) | Parameters from the documented mixin or function |
| [@prop](#prop) | Property of the documented map |
| [@requires (@require)](#requires) | Requirements from the documented item |
| [@returns (@return)](#returns-synonym-return) | Return from the documented function |
| [@see](#see) | Resource related to the documented item |
| [@since](#since) | Changelog for the documented item |
| [@throws (@throw, @exception)](#throws-synonym-throw-exception) | Exceptions raised by the documented item |
| [@todo](#todo) | Things to do related to the documented item |

<p class="note  note--info"><strong>Note:</strong> remember that you can define annotations at a file level rather than on specific items, which can happen to be very useful when all items from a file share some traits (author, group, and so on...). To do so, please refer to <a href="/file-level-annotations/">File-level Annotations</a>.</p>

## Name

Name of the documented item is self parsed, hence `@name` doesn't exist.

## Description

Describes the documented item.

**Example:**

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

**Notes:**

* Parsed as Markdown.*
* Comes on top of a comment, before any annotation.

## @access

Defines the access of the documented item.

**Example:**

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

**Notes:**

* Either `public` or `private`.
* None is considered `public`.

## @alias

Defines if the documented item is an alias of another item.

**Example:**

{% highlight scss %}
/**
 * @alias other-item
 */
{% endhighlight %}

{% highlight scss %}
/// @alias other-item
{% endhighlight %}

**Notes:**

* The other item will automatically have a key named `aliased` containing the name of aliases.

## @author

Describes the author of the documented item.

**Example:**

{% highlight scss %}
/**
 * @author Author's name
 */
{% endhighlight %}

{% highlight scss %}
/// @author Author's name
{% endhighlight %}

**Notes:**

* Parsed as Markdown.*
* Multiple `@author` allowed on the same item.

## @content

Describes the usage of `@content` Sass directive in a mixin.

**Example:**

{% highlight scss %}
/**
 * @content [Description]
 */
{% endhighlight %}

{% highlight scss %}
/// @content [Description]
{% endhighlight %}

**Notes:**

* Autofilled (if not set otherwise in `autofill` option).
* Parsed as Markdown.*
* Automatically added if found in extracted code.
* Has no effect on functions, variables and placeholders.

## @deprecated

Defines if the documented item is deprecated.

**Example:**

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

**Notes:**

* Message is optional.
* Parsed as Markdown.*

## @example

Describes a use case for the documented item, with a given language and description if specified.

**Example:**

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
/// @example scss
/// // This is some SCSS code
/// @example scss - Clamp function
/// clamp(42, $min: 13, $max: 37)
/// // 37
{% endhighlight %}

**Notes:**

* Multiple `@example` allowed on the same item.
* Lines starting with '@' need to be indented to work correctly.
* First word on the same line as `@example` is the language for syntax highlighting.
* Currently supported languages: `css`, `scss`, `markup`, `javascript`. New languages on demand.
* Everything but the first word on the same line as `@example` is the description.
* Hyphen before description is optional.
* Description is parsed as Markdown.*

## @group

Defines to which group (if any) the documented item belongs.

{% highlight scss %}
/**
 * @group helpers
 */
{% endhighlight %}

{% highlight scss %}
/// @group helpers
{% endhighlight %}

**Notes:**

* All items without `@group` will be gathered in an "undefined" group.
* Groups define the way items are displayed in SassDoc's default theme.
* Groups can be aliased for friendly names from the configuration ([more infos](https://github.com/SassDoc/sassdoc/wiki/Customising-the-View)).

## @ignore

Defines a line which won't be documented.

**Example:**

{% highlight scss %}
/**
 * @ignore Message
 */
{% endhighlight %}

{% highlight scss %}
/// @ignore Message
{% endhighlight %}

**Notes:**

* Multiple `@ignore` allowed on the same item.

## @link (synonym: @source)

Describes a link.

**Example:**

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

**Notes:**

* Caption is optional.
* Multiple `@link` allowed on the same item.

## @output

An equivalent to `@return` for mixins. Provide a description of what's being printed by the mixin.

**Example:**

{% highlight scss %}
/**
 * @output Description
 */
{% endhighlight %}

{% highlight scss %}
/// @output Description
{% endhighlight %}

**Notes:**

* Description is parsed as Markdown.*
* Has no effect on functions, variables and placeholders.

## @param (synonyms: @arg, @argument)

Describes a parameter of the documented item.

**Example:**

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

**Notes:**

* Default value is optional.
* Description is optional. Hyphen before description is optional.
* Description is parsed as Markdown.*
* Multiple types must be separated by pipes (`|`).
* Has no effect on variables and placeholders.

## @prop

Document maps properties, use the dot notation to signify nesting.

**Example:**

{% highlight scss %}
/**
 * @prop {Type} base.default (default) - description
 */
{% endhighlight %}

{% highlight scss %}
/// @prop {Type} base.default (default) - description
{% endhighlight %}

**Notes:**

* Description is parsed as Markdown.*
* If `{Type}` is omitted, it will default to `Map` to make it more convenient for nested maps.

## @requires

Defines if the documented item requires any other item.

**Example:**

{% highlight scss %}
/**
 * @requires item
 * @requires {type} item
 * @requires {type} item - description
 * @requires {type} item description
 * @requires {type} item <link>
 * @requires {type} item description <link>
 */
{% endhighlight %}

{% highlight scss %}
/// @requires item
/// @requires {type} item
/// @requires {type} item - description
/// @requires {type} item description
/// @requires {type} item <link>
/// @requires {type} item description <link>
{% endhighlight %}

**Notes:**

* Autofilled (if not set otherwise in `autofill` option).
* Type is optional; default type is `function`.
* Description is optional. Hyphen before description is optional.
* Description is parsed as Markdown.*
* Link is optional.
* Item name can contain `::`, `:`, `.` and/or `/` when item is from an external resource.
* Link is used as a link if present, else it tries to link to an inner item, else it doesn't have a link.
* If `{type}` is `variable`, then the `$` sign before the variable name is optional. Alongside if there is a `$` sign before the item name, then the `{variable}` type is optional.
* If `{type}` is `placeholder`, then the `%` sign before the placeholder name is optional. Alongside if there is a `%` sign before the item name, then the `{placeholder}` type is optional.
* The other item will automatically have a key named `usedBy` containing the name of function requiring it.
* Multiple `@requires` allowed on the same item.

## @returns (synonym: @return)

Describes the return statement of the documented item.

**Example:**

{% highlight scss %}
/**
 * @returns {type}
 */

/**
 * @returns {type | othertype}
 */

/**
 * @returns {type} description
 */
{% endhighlight %}

{% highlight scss %}
/// @returns {type}

/// @returns {type | othertype}

/// @returns {type} description
{% endhighlight %}

**Notes:**

* Description is optional. Hyphen before description is optional.
* Description is parsed as Markdown.*
* Multiple types must be separated by pipes (`|`).

## @see

Describes an item that is somehow related to the documented item. To describe a dependency, authors should use `@requires` instead.

**Example:**

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

**Notes:**

* Type is optional; default type is `function`.
* If `{type}` is `variable`, then the `$` sign before the variable name is optional. Alongside if there is a `$` sign before the item name, then the `{variable}` type is optional.
* If `{type}` is `placeholder`, then the `%` sign before the placeholder name is optional. Alongside if there is a `%` sign before the item name, then the `{placeholder}` type is optional.

## @since

Describes the version at which the documented item has been implemented or updated.

**Example:**

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

**Notes:**

* Description is optional. Hyphen before description is optional.
* Description is parsed as Markdown.*
* Multiple `@since` allowed on the same item.

## @throws (synonym: @throw, @exception)

Describes the error thrown by the documented item.

**Example:**

{% highlight scss %}
/**
 * @throws Error related message
 */
{% endhighlight %}

{% highlight scss %}
/// @throws Error related message
{% endhighlight %}

**Notes:**

* Autofilled (if not set otherwise in `autofill` option).
* Description is parsed as Markdown.*
* Multiple `@throws` allowed on the same item.

## @todo

Defines any task to do regarding the documented item.

**Example:**

{% highlight scss %}
/**
 * @todo Task to be done
 */
{% endhighlight %}

{% highlight scss %}
/// @todo Task to be done
{% endhighlight %}

**Notes:**

* Description is parsed as Markdown.*
* Multiple `@todo` allowed on the same item.

## @type

Describes the type of a variable.

**Example:**

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

**Notes:**

* Has no effect on functions, mixins and placeholders.
* Multiple types are separated with pipes (`|`).

---

\* The Markdown parsing is effective in compliant themes, usually by using the Markdown filter from [sassdoc-filter](https://github.com/sassdoc/sassdoc-filter).
