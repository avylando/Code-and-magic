'use strict';

(function () {
  window.backend = {
    load: function (onLoad, onError) {
      var URL = 'https://1510.dump.academy/code-and-magick/data';
      var loader = document.createElement('script');
      loader.src = URL + '?callback=' + onLoad;

      loader.addEventListener('load', function () {
        onLoad();
      });

      loader.addEventListener('error', function () {
        onError('Произошла ошибка!');
      });
    }
  };
})();
