(function ($, global) {

  var ThemePicker = function (conf) {
    this.conf = $.extend({
      // Fetch conf

      // Classes
      container: 'sassdoc-theme-preview',

      // Extra options
      init: true
    }, conf || {});

    if (this.conf.init !== false) {
      this.initialize();
    }
  };

  ThemePicker.prototype.initialize = function () {
    var $item         = $('.theme-picker__item');
    var $frame        = $('.theme-preview__frame');
    var $container    = $('.' + this.conf.container);
    var inactiveClass = this.conf.container + '--empty';
    var $selectedItem;

    $item.on('click', function (event) {
      $selectedItem = $(event.target).closest('[data-theme-name]');

      $container.removeClass(inactiveClass);
      $item.removeClass('active');
      $selectedItem.addClass('active');

      $frame.attr('src', '/theme-picker/preview/' + $selectedItem.data('theme-name'));
    });
  };

  global.ThemePicker = ThemePicker;

}(window.jQuery, window));
