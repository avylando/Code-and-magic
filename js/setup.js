'use strict';

var setupWindow = document.querySelector('.setup');
var similarTemplate = document.querySelector('#similar-wizard-template').content;
var similarList = document.querySelector('.setup-similar-list');
var similarWizard = similarTemplate.querySelector('.setup-similar-item');
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Setup open/close events

var setupOpen = document.querySelector('.setup-open');
var setupOpenClickHandler = function () {
  setupWindow.classList.remove('hidden');
};

var ENTER_KEYCODE = 13;
var setupOpenKeydownHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupOpenClickHandler();
  }
};

setupOpen.addEventListener('click', setupOpenClickHandler);
setupOpen.addEventListener('keydown', setupOpenKeydownHandler);

var setupClose = setupWindow.querySelector('.setup-close');
var setupCloseClickHandler = function () {
  setupWindow.classList.add('hidden');
};

var ESC_KEYCODE = 27;
var setupCloseEscHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    setupCloseClickHandler();
  }
};

var setupCloseEnterHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupCloseClickHandler();
  }
};

setupClose.addEventListener('click', setupCloseClickHandler);
setupClose.addEventListener('keydown', setupCloseEnterHandler);
window.addEventListener('keydown', setupCloseEscHandler);

var setupSave = setupWindow.querySelector('.setup-submit');

setupSave.addEventListener('click', setupCloseClickHandler);
setupSave.addEventListener('keydown', setupCloseEnterHandler);

// Focus on username condition

var setupUserName = setupWindow.querySelector('.setup-user-name');

setupUserName.addEventListener('focus', function () {
  window.removeEventListener('keydown', setupCloseEscHandler);
});

setupUserName.addEventListener('blur', function () {
  window.addEventListener('keydown', setupCloseEscHandler);
});

// Validation

setupUserName.addEventListener('invalid', function () {
  if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity('В имени должно быть минимум 2 символа');
  } else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity('В имени должно быть не более 25 символов');
  } else if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity('Заполните это поле');
  }
});

// Useful functions

var getRandomValue = function (array) {
  return Math.floor(Math.random() * array.length);
};

var x = 1;
var getValueInOrder = function (array) {

  var value = array[x++];
  if (x > array.length - 1) {
    x = 0;
  }

  return value;
};

// Customize wizard


var setCustomFill = function (element, array) {
  element.style.fill = getValueInOrder(array);
};

var setCustomBg = function (element, array) {
  element.style.backgroundColor = getValueInOrder(array);
};

var wizardCoat = setupWindow.querySelector('.setup-wizard .wizard-coat');
var setCoatColor = function () {
  setCustomFill(wizardCoat, coatColors);
};

wizardCoat.addEventListener('click', setCoatColor);


var wizardEyes = setupWindow.querySelector('.setup-wizard .wizard-eyes');
var setEyesColor = function () {
  setCustomFill(wizardEyes, eyesColors);
};

wizardEyes.addEventListener('click', setEyesColor);

var fireball = setupWindow.querySelector('.setup-fireball-wrap');
var setFireballColor = function () {
  setCustomBg(fireball, fireballColors);
};

fireball.addEventListener('click', setFireballColor);

// Generate wizard from template

var generateWizard = function (wizard) {
  var wizardElement = similarWizard.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

// Create wizards array

for (var i = 0; i < 4; i++) {
  var wizard = {
    name: wizardNames[getRandomValue(wizardNames)],
    surname: wizardSurnames[getRandomValue(wizardSurnames)],
    coatColor: coatColors[getRandomValue(coatColors)],
    eyesColor: eyesColors[getRandomValue(eyesColors)]
  };

  wizards[i] = wizard;

  fragment.appendChild(generateWizard(wizards[i]));
}

// Add wizards in setup window

similarList.appendChild(fragment);
setupWindow.querySelector('.setup-similar').classList.remove('hidden');
