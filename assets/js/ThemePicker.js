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
    this.bindUI();
  };

  ThemePicker.prototype.bindUI = function () {
    $('.theme-picker__item').on('click', $.proxy(function (event) {
      this.selectTheme($(event.target).attr('id'));
    }, this));
  };

  ThemePicker.prototype.selectTheme = function (theme) {
    var themeConf = this.conf.themes[theme];

    if (typeof themeConf === 'undefined') {
      throw new Error('Unknown theme `' + theme + '`.');
    }

    $('.' + this.conf.container).removeClass(this.conf.container + '--empty');
    this.injectData(theme);
    this.preview(theme);
  };

  ThemePicker.prototype.injectData = function (theme) {
    var themeConf = this.conf.themes[theme];

    $('.theme-content__name').html(themeConf.name);
    $('.theme-content__author').html(themeConf.author);
    $('.theme-content__homepage').html(themeConf.homepage);
    $('.theme-content__homepage').attr('href', themeConf.homepage);
    $('.theme-content__description').html(themeConf.description);
    $('.theme-content__license').html(themeConf.license);
    $('.theme-content__version').html(themeConf.version);
  };

  ThemePicker.prototype.preview = function (theme) {
    $('.theme-picker__previewer').attr('src', '/preview/theme-' + theme);
  };
  
  global.ThemePicker = ThemePicker;
  
}(window.jQuery, window));
