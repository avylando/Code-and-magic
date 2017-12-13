'use strict';

(function () {

  // Variables

  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
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

  window.colorizeElement(wizardCoat, coatColors, setCustomFill);
  window.colorizeElement(wizardEyes, eyesColors, setCustomFill);
  window.colorizeElement(fireball, fireballColors, setCustomBg);

})();
