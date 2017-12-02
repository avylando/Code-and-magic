'use strict';

(function () {

  // Useful values

  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Customize wizard

  var setCustomFill = function (element, array) {
    element.style.fill = window.lib.getValueInOrder(array);
  };

  var setCustomBg = function (element, array) {
    element.style.backgroundColor = window.lib.getValueInOrder(array);
  };

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var setCoatColor = function () {
    setCustomFill(wizardCoat, window.data.coatColors);
  };

  wizardCoat.addEventListener('click', setCoatColor);


  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var setEyesColor = function () {
    setCustomFill(wizardEyes, window.data.eyesColors);
  };

  wizardEyes.addEventListener('click', setEyesColor);

  var fireball = document.querySelector('.setup-fireball-wrap');
  var setFireballColor = function () {
    setCustomBg(fireball, fireballColors);
  };

  fireball.addEventListener('click', setFireballColor);
})();
