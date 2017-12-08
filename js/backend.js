'use strict';

(function () {
  window.backend = {
    load: function (onError) {
      var URL = 'https://1510.dump.academy/code-and-magick/data';
      var CALLBACK_NAME = 'loadUsersWizards';
      var loader = document.createElement('script');
      loader.src = URL + '?callback=' + CALLBACK_NAME;

      loader.addEventListener('error', function () {
        onError('Произошла ошибка!');
      });

      document.body.appendChild(loader);
    },

    save: function (data, onLoad, onError) {
      var URL = 'https://1510.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();

      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case 200:
            onLoad('Волшебник успешно сохранен!');
            break;

          default:
            onError('Произошла ошибка: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Ошибка соединения с сервером');
      });

      xhr.addEventListener('timeout', function () {
        onError('Истек таймаут соединения с сервером');
      });

      xhr.timeout = 10000;
      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
