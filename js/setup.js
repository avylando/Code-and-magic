'use strict';

(function () {

  // Useful values

  var setupWindow = document.querySelector('.setup');

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

})();
