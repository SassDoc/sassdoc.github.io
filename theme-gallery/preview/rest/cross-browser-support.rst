cross-browser-support
=====================

keyframes
---------

Source
~~~~~~

.. code-block:: scss

	@mixin keyframes($name) { 
	  @-webkit-keyframes #{$name} {
	    @content;
	  }
	
	  @keyframes #{$name} {
	    @content;
	  }
	}

Description
~~~~~~~~~~~

Mixin to handle cross browser keyframes for CSS animations.

Parameters
~~~~~~~~~~

============== ============== ============== ==============
Name           Description    Type           Default Value 
============== ============== ============== ==============
name           Animation name String                       
============== ============== ============== ==============

Content
~~~~~~~

This mixin allows extra content to be passed (through the ``@content`` directive).

prefixer
--------

Source
~~~~~~

.. code-block:: scss

	@mixin prefixer($property, $value, $vendors: 'webkit' 'moz' 'ms' 'o') { 
	  @if $vendors {
	    @each $vendor in $vendors {
	      #{'-' + $vendor + '-' + $property}: #{$value};
	    }
	  }
	
	  #{$property}: #{$value};
	}

Description
~~~~~~~~~~~

Mixin to prefix properties that are not prefixed by Compass

Parameters
~~~~~~~~~~

========================= ========================= ========================= =========================
Name                      Description               Type                      Default Value            
========================= ========================= ========================= =========================
property                  Property to prefix        String                                             
value                     Value for property        *                                                  
vendors                   Vendor prefixes to output List                      'webkit' 'moz' 'ms' 'o'  
========================= ========================= ========================= =========================

Example
~~~~~~~

.. code-block:: scss

	@include prefixer(&#39;transform&#39;, &#39;translate(10px)&#39;);

opacity
-------

Source
~~~~~~

.. code-block:: scss

	@mixin opacity($opacity) { 
	  $opacity: clamp($opacity, 0, 1);
	  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=#{$opacity * 100})';
	  opacity: $opacity;
	}

Description
~~~~~~~~~~~

Mixin for cross-browser opacity (IE 8).
Clamps the value between 0 and 1.

Parameters
~~~~~~~~~~

============================== ============================== ============================== ==============================
Name                           Description                    Type                           Default Value                 
============================== ============================== ============================== ==============================
opacity                        Opacity level, between 0 and 1 Number                                                       
============================== ============================== ============================== ==============================

Requires
~~~~~~~~

* ``opacity``

* ``clamp``

Used By
~~~~~~~

* [mixin] ``opacity``