helpers
=======

clearfix
--------

Source
~~~~~~

.. code-block:: scss

	@mixin clearfix($extend: true) { 
	  @if $extend {
	    @extend %clearfix;
	  }
	
	  @else {
	    &:after {
	      content: "";
	      display: table;
	      clear: both;
	    }
	  }
	}

Description
~~~~~~~~~~~

Float clearing helper.

Parameters
~~~~~~~~~~

==================================== ==================================== ==================================== ====================================
Name                                 Description                          Type                                 Default Value                       
==================================== ==================================== ==================================== ====================================
extend                               Whether or not extend a placeholder. Bool                                 true                                
==================================== ==================================== ==================================== ====================================

Requires
~~~~~~~~

* ``clearfix``

Used By
~~~~~~~

* [mixin] ``clearfix``

* [placeholder] ``clearfix``

visually-hidden
---------------

Source
~~~~~~

.. code-block:: scss

	@mixin visually-hidden($extend: true) { 
	  @if $extend {
	    @extend %visually-hidden;
	  }
	
	  @else {
	    @include size(1px);
	    position: absolute;
	    padding: 0;
	    margin: -1px;
	    overflow: hidden;
	    clip: rect(0 0 0 0);
	    border: 0;
	  }
	}

Description
~~~~~~~~~~~

Accessibility hiding helper.

Parameters
~~~~~~~~~~

==================================== ==================================== ==================================== ====================================
Name                                 Description                          Type                                 Default Value                       
==================================== ==================================== ==================================== ====================================
extend                               Whether or not extend a placeholder. Bool                                 true                                
==================================== ==================================== ==================================== ====================================

Requires
~~~~~~~~

* ``visually-hidden``

* ``size``

Used By
~~~~~~~

* [mixin] ``visually-hidden``

* [placeholder] ``visually-hidden``

ellipsis
--------

Source
~~~~~~

.. code-block:: scss

	@mixin ellipsis($extend: true) { 
	  @if $extend {
	    @extend %ellipsis;
	  }
	
	  @else {
	    text-overflow: ellipsis;
	    overflow: hidden;
	    white-space: nowrap;
	  }
	}

Description
~~~~~~~~~~~

Accessibility ellipsis helper.

Parameters
~~~~~~~~~~

==================================== ==================================== ==================================== ====================================
Name                                 Description                          Type                                 Default Value                       
==================================== ==================================== ==================================== ====================================
extend                               Whether or not extend a placeholder. Bool                                 true                                
==================================== ==================================== ==================================== ====================================

Requires
~~~~~~~~

* ``ellipsis``

Used By
~~~~~~~

* [mixin] ``ellipsis``

* [placeholder] ``ellipsis``