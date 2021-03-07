General
=======

opposite-direction
------------------

Source
~~~~~~

.. code-block:: scss

	@function opposite-direction($directions) { 
	  $opposite-directions: ();
	  $direction-map: (
	    'top':    'bottom',
	    'right':    'left',
	    'bottom':    'top',
	    'left':    'right',
	    'ltr':       'rtl',
	    'rtl':       'ltr'
	  );
	
	  @each $direction in $directions {
	    @if not map-has-key($direction-map, $direction) {
	      @warn 'No opposite direction found for `#{$direction}`.';
	      @return null;
	    }
	
	    $opposite-directions: append($opposite-directions, unquote(map-get($direction-map, $direction)));
	  }
	
	  @return $opposite-directions;
	}

Description
~~~~~~~~~~~

Returns the opposite direction of every direction in `$directions`.

Parameters
~~~~~~~~~~

=================== =================== =================== ===================
Name                Description         Type                Default Value      
=================== =================== =================== ===================
directions          Positions to revert List                                   
=================== =================== =================== ===================

Returns
~~~~~~~

``List | Null``

Throws
~~~~~~

* No opposite direction found for `$direction`.

clamp
-----

Source
~~~~~~

.. code-block:: scss

	@function clamp($value, $min, $max) { 
	  @if type-of($value) != 'number' or type-of($min) != 'number' or type-of($max) != 'number' {
	    @error 'All parameters must be numbers for `clamp`.';
	  }
	
	  @return if($value > $max, $max, if($value < $min, $min, $value));
	}

Description
~~~~~~~~~~~

Clamp `$value` between `$min` and `$max`.

Parameters
~~~~~~~~~~

======================================== ======================================== ======================================== ========================================
Name                                     Description                              Type                                     Default Value                           
======================================== ======================================== ======================================== ========================================
value                                    Value to clamp between `$min` and `$max` Number                                                                           
min                                      Minimum value                            Number                                                                           
max                                      Maximum value                            Number                                                                           
======================================== ======================================== ======================================== ========================================

Returns
~~~~~~~

``Number | Null``

Throws
~~~~~~

* All parameters must be numbers for `clamp`.

Used By
~~~~~~~

* [mixin] ``opacity``

* [mixin] ``card``

z
-

Source
~~~~~~

.. code-block:: scss

	@function z($layer) { 
	  @if not map-has-key($z-indexes, $layer) {
	    @warn 'No z-index found for `#{$layer}`.';
	  }
	
	  @return map-get($z-indexes, $layer);
	}

Description
~~~~~~~~~~~

Helper to manage `z-index`.
Tries to fetch the z-index mapped to `$layer` in `$z-indexes` map.
If found, returns it, else returns `null`.

Parameters
~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
============= ============= ============= =============
layer         Layer         String                     
============= ============= ============= =============

Returns
~~~~~~~

``Number | Null``

Example
~~~~~~~

.. code-block:: scss

	z-index: z(&quot;default&quot;)

Throws
~~~~~~

* No z-index found for `$layer`.

Requires
~~~~~~~~

* ``z-indexes``

is-valid-length
---------------

Source
~~~~~~

.. code-block:: scss

	@function is-valid-length($value) { 
	  @return (type-of($value) == 'number' and not unitless($value)) or index('auto' 'initial' 'inherit' 0, $value);
	}

Description
~~~~~~~~~~~

Tests whether the value is a valid length.

Parameters
~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
============= ============= ============= =============
value         Value to test *                          
============= ============= ============= =============

Returns
~~~~~~~

``Bool``

top-shadow
----------

Source
~~~~~~

.. code-block:: scss

	@function top-shadow($depth) { 
	  $primary-offset: nth(1.5 3 10 14 19, $depth) * 1px;
	  $blur: nth(1.5 3 10 14 19, $depth) * 4px;
	  $color: rgba(black, nth(0.12 0.16 0.19 0.25 0.30, $depth));
	
	  @return 0 $primary-offset $blur $color;
	}

Description
~~~~~~~~~~~

Computes a top-shadow for a card effect.

Parameters
~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
============= ============= ============= =============
depth         depth level   Number                     
============= ============= ============= =============

Returns
~~~~~~~

``List``

Used By
~~~~~~~

* [mixin] ``card``

bottom-shadow
-------------

Source
~~~~~~

.. code-block:: scss

	@function bottom-shadow($depth) { 
	  $primary-offset: nth(1.5 3 6 10 15, $depth) * 1px;
	  $blur: nth(1 3 3 5 6, $depth) * 4px;
	  $color: rgba(black, nth(0.24 0.23 0.23 0.22 0.22, $depth));
	
	  @return 0 $primary-offset $blur $color;
	}

Description
~~~~~~~~~~~

Computes a bottom-shadow for a card effect.

Parameters
~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
============= ============= ============= =============
depth         depth level   Number                     
============= ============= ============= =============

Returns
~~~~~~~

``List``

Used By
~~~~~~~

* [mixin] ``card``

clearfix
--------

Source
~~~~~~

.. code-block:: scss

	@include clearfix($extend: false);

Description
~~~~~~~~~~~

Clearfix helper

Requires
~~~~~~~~

* ``clearfix``

visually-hidden
---------------

Source
~~~~~~

.. code-block:: scss

	@include visually-hidden($extend: false);

Description
~~~~~~~~~~~

Accessibility hiding helper.

Requires
~~~~~~~~

* ``visually-hidden``

ellipsis
--------

Source
~~~~~~

.. code-block:: scss

	@include ellipsis($extend: false);

Description
~~~~~~~~~~~

Accessibility ellipsis helper.

Requires
~~~~~~~~

* ``ellipsis``

size
----

Source
~~~~~~

.. code-block:: scss

	@mixin size($width, $height: $width) { 
	  width: $width;
	  height: $height;
	}

Description
~~~~~~~~~~~

Mixin to size elements.

Parameters
~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
============= ============= ============= =============
width         Width         Number                     
height        Height        Number        $width       
============= ============= ============= =============

Used By
~~~~~~~

* [mixin] ``visually-hidden``

position
--------

Access
~~~~~~

private

Source
~~~~~~

.. code-block:: scss

	@mixin position($position, $top: null, $right: null, $bottom: null, $left: null) { 
	  position: $position;
	  top: $top;
	  right: $right;
	  bottom: $bottom;
	  left: $left;
	}

Description
~~~~~~~~~~~

Shorthand for positioning.

Parameters
~~~~~~~~~~

======================================================== ======================================================== ======================================================== ========================================================
Name                                                     Description                                              Type                                                     Default Value                                           
======================================================== ======================================================== ======================================================== ========================================================
position                                                 Position type (either `absolute`, `fixed` or `relative`) String                                                                                                           
top                                                      Top offset                                               Length                                                   null                                                    
right                                                    Right offset                                             Length                                                   null                                                    
bottom                                                   Bottom offset                                            Length                                                   null                                                    
left                                                     Left offset                                              Length                                                   null                                                    
======================================================== ======================================================== ======================================================== ========================================================

Requires
~~~~~~~~

* ``position``

Used By
~~~~~~~

* [mixin] ``position``

* [mixin] ``absolute``

* [mixin] ``relative``

* [mixin] ``fixed``

absolute
--------

Source
~~~~~~

.. code-block:: scss

	@mixin absolute($args...) { 
	  @include position(absolute, $args...);
	}

Description
~~~~~~~~~~~

Shorthand for absolute positioning.

Parameters
~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
============= ============= ============= =============
args          Offsets       Arglist                    
============= ============= ============= =============

Example
~~~~~~~

Stretch an item over its parent.

.. code-block:: scss

	@include absolute($top: 0, $right: 0, $bottom: 0, $left: 0)

Requires
~~~~~~~~

* ``position``

relative
--------

Source
~~~~~~

.. code-block:: scss

	@mixin relative($args...) { 
	  @include position(relative, $args...);
	}

Description
~~~~~~~~~~~

Shorthand for relative positioning.

Parameters
~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
============= ============= ============= =============
args          Offsets       Arglist                    
============= ============= ============= =============

Requires
~~~~~~~~

* ``position``

fixed
-----

Source
~~~~~~

.. code-block:: scss

	@mixin fixed($args...) { 
	  @include position(fixed, $args...);
	}

Description
~~~~~~~~~~~

Shorthand for fixed positioning.

Parameters
~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
============= ============= ============= =============
args          Offsets       Arglist                    
============= ============= ============= =============

Requires
~~~~~~~~

* ``position``

respond-to
----------

Source
~~~~~~

.. code-block:: scss

	@mixin respond-to($breakpoint) { 
	  // If the key exists in the map
	  @if map-has-key($breakpoints, $breakpoint) {
	    // Prints a media query based on the value
	    @media #{inspect(map-get($breakpoints, $breakpoint))} {
	      @content;
	    }
	  }
	
	  // If the key doesn't exist in the map
	  @else {
	    @error 'No value found for `#{$breakpoint}`. '
	         + 'Please make sure it is defined in `$breakpoints` map.';
	  }
	}

Description
~~~~~~~~~~~

Responsive manager.

Parameters
~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
============= ============= ============= =============
breakpoint    Breakpoint    String                     
============= ============= ============= =============

Content
~~~~~~~

This mixin allows extra content to be passed (through the ``@content`` directive).

Throws
~~~~~~

* No value found for `#{$breakpoint}`. 

Requires
~~~~~~~~

* ``breakpoints``

inline-block
------------

Source
~~~~~~

.. code-block:: scss

	@mixin inline-block($align: null) { 
	  display: inline-block;
	  vertical-align: $align;
	}

Description
~~~~~~~~~~~

Mixin handling inline-block and vertical-align at once.
If no align is specified, then the `vertical-align` property won't be output.

Parameters
~~~~~~~~~~

============== ============== ============== ==============
Name           Description    Type           Default Value 
============== ============== ============== ==============
align          Vertical align String         null          
============== ============== ============== ==============

card
----

Source
~~~~~~

.. code-block:: scss

	@mixin card($depth) { 
	  $depth: clamp($depth, 1, 5);
	  box-shadow: bottom-shadow($depth), top-shadow($depth);
	  border: 1px solid $light-grey;
	}

Description
~~~~~~~~~~~

Gives a card depth effect.

Parameters
~~~~~~~~~~

============================= ============================= ============================= =============================
Name                          Description                   Type                          Default Value                
============================= ============================= ============================= =============================
depth                         depth level [between 1 and 5] Number                                                     
============================= ============================= ============================= =============================

Requires
~~~~~~~~

* ``clamp``

* ``top-shadow``

* ``bottom-shadow``

* ``light-grey``

Links
~~~~~

`Google Design <http://www.google.com/design/spec/layout/layout-principles.html#layout-principles-dimensionality>`_

on-event
--------

Source
~~~~~~

.. code-block:: scss

	@mixin on-event($self: false) { 
	    @if $self {
	        &,
	        &:hover,
	        &:active,
	        &:focus {
	            @content;
	        }
	    } @else {
	        &:hover,
	        &:active,
	        &:focus {
	            @content;
	        }
	    }
	}

Description
~~~~~~~~~~~

Event wrapper.

Parameters
~~~~~~~~~~

========================================== ========================================== ========================================== ==========================================
Name                                       Description                                Type                                       Default Value                             
========================================== ========================================== ========================================== ==========================================
self                                       Whether or not to include current selector Bool                                       false                                     
========================================== ========================================== ========================================== ==========================================

Content
~~~~~~~

This mixin allows extra content to be passed (through the ``@content`` directive).

Links
~~~~~

`Original tweet from Harry Roberts <https://twitter.com/csswizardry/status/478938530342006784>`_

Author
~~~~~~

* Harry Roberts

when-inside
-----------

Source
~~~~~~

.. code-block:: scss

	@mixin when-inside($context) { 
	    #{$context} & {
	        @content;
	    }
	}

Description
~~~~~~~~~~~

Contexts

Parameters
~~~~~~~~~~

============= ============= ============= =============
Name          Description   Type          Default Value
============= ============= ============= =============
context                     String | List              
============= ============= ============= =============

Content
~~~~~~~

This mixin allows extra content to be passed (through the ``@content`` directive).

Author
~~~~~~

* Kitty Giraudel

pink
----

Source
~~~~~~

.. code-block:: scss

	$pink: #dd5a6f

Description
~~~~~~~~~~~

Pink

Type
~~~~

``Color``

purple
------

Source
~~~~~~

.. code-block:: scss

	$purple: #5c4863

Description
~~~~~~~~~~~

Purple

Type
~~~~

``Color``

yellow
------

Source
~~~~~~

.. code-block:: scss

	$yellow: #ffc93c

Description
~~~~~~~~~~~

Yellow

Type
~~~~

``Color``

black
-----

Source
~~~~~~

.. code-block:: scss

	$black: #333

Description
~~~~~~~~~~~

Black

Type
~~~~

``Color``

primary-color
-------------

Source
~~~~~~

.. code-block:: scss

	$primary-color: $pink

Description
~~~~~~~~~~~

Primary color

Type
~~~~

``Color``

secondary-color
---------------

Source
~~~~~~

.. code-block:: scss

	$secondary-color: $yellow

Description
~~~~~~~~~~~

Primary color

Type
~~~~

``Color``

tertiary-color
--------------

Source
~~~~~~

.. code-block:: scss

	$tertiary-color: $purple

Description
~~~~~~~~~~~

Primary color

Type
~~~~

``Color``

light-grey
----------

Source
~~~~~~

.. code-block:: scss

	$light-grey: #e0e0e0

Description
~~~~~~~~~~~

Light grey

Type
~~~~

``Color``

Used By
~~~~~~~

* [mixin] ``card``

medium-grey
-----------

Source
~~~~~~

.. code-block:: scss

	$medium-grey: #ddd

Description
~~~~~~~~~~~

Medium

Type
~~~~

``Color``

breakpoints
-----------

Source
~~~~~~

.. code-block:: scss

	$breakpoints: (
	  'small':  (max-width: 800px),
	  'medium': (min-width: 801px)
	)

Description
~~~~~~~~~~~

Map of breakpoints for responsive design.

Type
~~~~

``Map``

Map Structure
~~~~~~~~~~~~~

================== ================== ================== ==================
Name               Description        Type               Default Value     
================== ================== ================== ==================
small              small screens      Map                (max-width: 800px)
medium             regular screens    Map                (min-width: 801px)
================== ================== ================== ==================

Used By
~~~~~~~

* [mixin] ``respond-to``

z-indexes
---------

Source
~~~~~~

.. code-block:: scss

	$z-indexes: (
	  'goku':       9001,
	  'modal':      5000,
	  'dropdown':   4000,
	  'social':     3000,
	  'default':       1,
	  'below':        -1
	)

Description
~~~~~~~~~~~

Z-indexes layers.

Type
~~~~

``Map``

Map Structure
~~~~~~~~~~~~~

============================== ============================== ============================== ==============================
Name                           Description                    Type                           Default Value                 
============================== ============================== ============================== ==============================
key                            aliases for specific z-indexes Number                                                       
============================== ============================== ============================== ==============================

Used By
~~~~~~~

* [function] ``z``

sidebar-width
-------------

Source
~~~~~~

.. code-block:: scss

	$sidebar-width: 280px

Description
~~~~~~~~~~~

Sidebar width

Type
~~~~

``Number``

vertical-rhythm
---------------

Source
~~~~~~

.. code-block:: scss

	$vertical-rhythm: 1.5rem

Description
~~~~~~~~~~~

Vertical rhythm

Type
~~~~

``Number``

text-font-stack
---------------

Source
~~~~~~

.. code-block:: scss

	$text-font-stack: 'Open Sans', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif

Description
~~~~~~~~~~~

Text font stack

Type
~~~~

``List``

code-font-stack
---------------

Source
~~~~~~

.. code-block:: scss

	$code-font-stack: 'Courier New', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Monaco', monospace

Description
~~~~~~~~~~~

Code font stack

Type
~~~~

``List``