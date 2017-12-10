'use strict';

(function () {

  // Useful values

  var setupWindow = document.querySelector('.setup');
  var setupSimilar = setupWindow.querySelector('.setup-similar');

  // Setup open/close events

  var setupOpen = document.querySelector('.setup-open');
  var setupOpenClickHandler = function () {
    if (setupWindow.classList.contains('hidden')) {
      setupWindow.style.left = '50%';
      setupWindow.style.top = '80px';
      setupWindow.classList.remove('hidden');
      setupSimilar.classList.remove('hidden');
    }
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


  // Drag-n-drop artifacts

  var shop = document.querySelector('.setup-artifacts-shop');
  var buyItem = null;
  var bag = document.querySelector('.setup-artifacts');

  shop.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      buyItem = evt.target.cloneNode(true);
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      bag.style.outline = '2px dashed red';
    }
  });

  bag.addEventListener('dragover', function (evt) {
    bag.style.outline = '';
    evt.preventDefault();
    return false;
  });

  bag.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    bag.style.outline = '';
    if (evt.target.hasChildNodes() || evt.target.src === buyItem.src) {
      evt.target.style.backgroundColor = 'red';
    } else {
      evt.target.appendChild(buyItem);
    }
    evt.preventDefault();
  });

  bag.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    if (evt.target.hasChildNodes() || evt.target.src === buyItem.src) {
      evt.target.style.backgroundColor = 'red';
    }
  });

  bag.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

  // Form submit

  var form = document.querySelector('.setup-wizard-form');

  var saveForm = function () {
    form.classList.add('hidden');
  };

  var errorSavingForm = function (message) {
    var errorBlock = document.createElement('div');
    errorBlock.style.position = 'absolute';
    errorBlock.style.zIndex = '100';
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

  form.addEventListener('submit', function (evt) {
    var formData = new FormData(form);
    window.backend.save(formData, saveForm, errorSavingForm);
    evt.preventDefault();
  });


})();
