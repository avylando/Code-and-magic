'use strict';

(function () {

  var x = 1;

  window.lib = {

    getRandomValue: function (array) {
      return Math.floor(Math.random() * array.length);
    },

    getValueInOrder: function (array) {

      var value = array[x++];
      if (x > array.length - 1) {
        x = 0;
      }

      return value;
    },

    getRandomItemsFromArray: function (array, number) {
      var output = [];

      for (var i = 0; i < number; i++) {
        var item = array[Math.floor(Math.random() * array.length)];
        output[i] = item;
      }
      return output;
    }
  };
})();
