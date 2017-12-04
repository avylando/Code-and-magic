'use strict';

(function () {

  // Useful values

  var dialog = document.querySelector('.setup');
  var buttonHandle = dialog.querySelector('.upload');
  var shiftX = 365;
  var shiftY = 35;

  // Add draggable dialog


  buttonHandle.addEventListener('mousedown', function (evt) {
    buttonHandle.style.cursor = 'grabbing';
    if (evt.currentTarget === dialog.querySelector('input')) {
      evt.preventDefault();
    }

    var dialogMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      if (moveEvt.currentTarget === dialog.querySelector('input')) {
        moveEvt.preventDefault();
      }

      dialog.style.left = (moveEvt.pageX + shiftX) + 'px';
      dialog.style.top = (moveEvt.pageY - shiftY) + 'px';
    };

    document.addEventListener('mousemove', dialogMouseMoveHandler);

    var buttonHandleMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      if (upEvt.currentTarget === dialog.querySelector('input')) {
        upEvt.preventDefault();
      }

      document.removeEventListener('mousemove', dialogMouseMoveHandler);
      document.removeEventListener('mouseup', buttonHandleMouseUpHandler);
    };

    document.addEventListener('mouseup', buttonHandleMouseUpHandler);
  });


})();
