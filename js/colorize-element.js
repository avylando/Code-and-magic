'use strict';

(function () {

  window.colorizeElement = function (elem, colors, callback) {
    elem.addEventListener('click', function () {
      var colorElement = window.lib.getValueInOrder(colors);
      callback(elem, colorElement);
    });
  };
})();
