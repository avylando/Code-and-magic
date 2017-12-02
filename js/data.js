'use strict';

(function () {

  // Useful values

  var similarTemplate = document.querySelector('#similar-wizard-template').content;
  var similarList = document.querySelector('.setup-similar-list');
  var similarWizard = similarTemplate.querySelector('.setup-similar-item');
  var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizards = [];

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
      name: wizardNames[window.lib.getRandomValue(wizardNames)],
      surname: wizardSurnames[window.lib.getRandomValue(wizardSurnames)],
      coatColor: coatColors[window.lib.getRandomValue(coatColors)],
      eyesColor: eyesColors[window.lib.getRandomValue(eyesColors)]
    };

    wizards[i] = wizard;

    fragment.appendChild(generateWizard(wizards[i]));
  }

  // Add wizards in setup window

  similarList.appendChild(fragment);

  // Export values

  window.data = {

    coatColors: coatColors,
    eyesColors: eyesColors,

  };

})();
