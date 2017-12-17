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

  var usersWizards = [];
  var maxWizards = 4;
  var loadUsersWizards = function (data) {
    usersWizards = data;
    for (var i = 0; i < maxWizards; i++) {
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

  // Set filter

  var wizard = document.querySelector('.wizard');

  var clearWizardsList = function () {
    var similarWizards = similarList.querySelectorAll('.setup-similar-item');
    similarWizards.forEach(function (wiz) {
      similarList.removeChild(wiz);
    });
  };

  var getRank = function (sameWizard) {
    sameWizard.rank = 0;
    var wizardEyes = wizard.querySelector('.wizard-eyes');
    var wizardCoat = wizard.querySelector('.wizard-coat');

    if (sameWizard.colorCoat === wizardCoat.style.fill) {
      sameWizard.rank += 2;
    }

    if (sameWizard.colorEyes === wizardEyes.style.fill) {
      sameWizard.rank += 1;
    }

    return sameWizard.rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    clearWizardsList();

    var rankedWizards = usersWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });

    rankedWizards = rankedWizards.slice(0, 4);
    rankedWizards.forEach(renderWizard);
  };

  // var debounce = function (func, interval) {
  //   var lastTimer = null;

  //   return function () {

  //     if (lastTimer) {
  //       window.clearTimeout(lastTimer);
  //     }

  //     lastTimer = window.setTimeout(func, interval);
  //   };
  // };

  var debounce = function (func, wait) {
    var lastTimeout;

    return function () {
      var args = arguments;
      var onComplete = function () {
        lastTimeout = null;
        func.apply(window, args);
      };

      if (lastTimeout) {
        clearTimeout(lastTimeout);
      }

      lastTimeout = setTimeout(onComplete, wait);
    };
  };

  var wizardClickHandler = debounce(updateWizards, 500);

  wizard.addEventListener('click', wizardClickHandler);

})();
