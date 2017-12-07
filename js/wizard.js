'use strict';

(function () {

  // Variables

  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Customize wizard

  var setCustomFill = function (element, color) {
    element.style.fill = color;
  };

  var setCustomBg = function (element, color) {
    element.style.backgroundColor = color;
  };

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  window.colorizeElement(wizardCoat, window.data.coatColors, setCustomFill);
  window.colorizeElement(wizardEyes, window.data.eyesColors, setCustomFill);
  window.colorizeElement(fireball, fireballColors, setCustomBg);

})();
