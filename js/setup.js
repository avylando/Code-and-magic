'use strict';

var setupWindow = document.querySelector('.setup');
var similarTemplate = document.querySelector('#similar-wizard-template').content;
var similarList = document.querySelector('.setup-similar-list');
var similarWizard = similarTemplate.querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS = [];

setupWindow.classList.remove('hidden');

var generateWizard = function (wizard) {
  var wizardElement = similarWizard.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  var wizard = {
    name: WIZARD_NAMES[Math.floor(Math.random() * (WIZARD_NAMES.length - 1))],
    surname: WIZARD_SURNAMES[Math.floor(Math.random() * (WIZARD_SURNAMES.length - 1))],
    coatColor: COAT_COLORS[Math.floor(Math.random() * (COAT_COLORS.length - 1))],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * (EYES_COLORS.length - 1))]
  };

  WIZARDS[i] = wizard;

  fragment.appendChild(generateWizard(WIZARDS[i]));
}

similarList.appendChild(fragment);
setupWindow.querySelector('.setup-similar').classList.remove('hidden');
