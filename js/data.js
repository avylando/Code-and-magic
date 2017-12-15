'use strict';

(function () {

  // Variables

  var similarList = document.querySelector('.setup-similar-list');

  // Load data from server

  var renderWizard = function (wizard) {
    var similarWizard = document.querySelector('#similar-wizard-template').content;

    var wizardElement = similarWizard.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    // var fragment = document.createDocumentFragment();
    similarList.appendChild(wizardElement);
  };

  var loadUsersWizards = function (data) {
    var usersWizards = window.lib.getRandomItemsFromArray(data, 4);
    for (var i = 0; i < usersWizards.length; i++) {
      renderWizard(usersWizards[i]);
    }
  };

  var errorLoadingWizards = function (message) {
    var errorBlock = document.createElement('div');
    errorBlock.style.position = 'absolute';
    errorBlock.style.left = '20px';
    errorBlock.style.top = '20px';
    errorBlock.style.width = '200px';
    errorBlock.style.backgroundColor = 'red';
    errorBlock.style.color = '#ffffff';
    errorBlock.style.textTransform = 'uppercase';
    errorBlock.style.textAlign = 'center';
    errorBlock.textContent = message;

    document.body.insertAdjacentElement('afterbegin', errorBlock);
  };

  window.backend.load(loadUsersWizards, errorLoadingWizards);

  // Generate wizard from template

  // var generateWizard = function (wizard) {
  //   var wizardElement = similarWizard.cloneNode(true);
  //   wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  //   wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  //   wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  //   return wizardElement;
  // };

  // var fragment = document.createDocumentFragment();

  // // Create wizards array

  // for (var i = 0; i < 4; i++) {
  //   var wizard = {
  //     name: wizardNames[window.lib.getRandomValue(wizardNames)],
  //     surname: wizardSurnames[window.lib.getRandomValue(wizardSurnames)],
  //     coatColor: coatColors[window.lib.getRandomValue(coatColors)],
  //     eyesColor: eyesColors[window.lib.getRandomValue(eyesColors)]
  //   };

  //   wizards[i] = wizard;

  //   fragment.appendChild(generateWizard(wizards[i]));
  // }

  // Add wizards in setup window

  // similarList.appendChild(fragment);


})();
