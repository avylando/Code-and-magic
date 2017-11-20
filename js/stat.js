'use strict';

window.renderStatistics = function (ctx, names, times) {

  // Отрисовка облака

  ctx.fillStyle = '#ffffff';
  ctx.beginPath();

  ctx.lineTo(110, 25);

  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';

  var currentX = 110;
  var currentY = 25;
  var firstPointY = 10;
  var secondPointY = 10;
  var step = 100;
  var cloudIndent = 10;
  var cloudBody = 80;
  var endY = currentY;
  for (var i = 0; i < 4; i++) {
    var endX = currentX + step;
    var firstPointX = currentX + cloudIndent;
    var secondPointX = firstPointX + cloudBody;
    currentX += step;
    ctx.bezierCurveTo(firstPointX, firstPointY, secondPointX, secondPointY, endX, endY);
  }

  ctx.fill();

  step = 80;
  cloudBody = 60;
  firstPointX = 520;
  secondPointX = 520;
  currentX = endX;
  for (var j = 0; j < 3; j++) {
    endY = currentY + step;
    firstPointY = currentY + cloudIndent;
    secondPointY = firstPointY + cloudBody;
    currentY += step;
    ctx.bezierCurveTo(firstPointX, firstPointY, secondPointX, secondPointY, endX, endY);
  }

  ctx.fill();

  step = 100;
  cloudBody = 80;
  firstPointY = 280;
  secondPointY = 280;
  currentY = endY;
  for (i = 0; i < 4; i++) {
    endX = currentX - step;
    firstPointX = currentX - cloudIndent;
    secondPointX = firstPointX - cloudBody;
    currentX -= step;
    ctx.bezierCurveTo(firstPointX, firstPointY, secondPointX, secondPointY, endX, endY);
  }

  ctx.fill();

  step = 80;
  cloudBody = 60;
  firstPointX = 100;
  secondPointX = 100;
  currentX = endX;
  for (j = 0; j < 3; j++) {
    endY = currentY - step;
    firstPointY = currentY - cloudIndent;
    secondPointY = firstPointY - cloudBody;
    currentY -= step;
    ctx.bezierCurveTo(firstPointX, firstPointY, secondPointX, secondPointY, endX, endY);
  }

  ctx.fill();

  ctx.closePath();

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = 'transparent';

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура! Вы победили!', 230, 40);
  ctx.fillText('Список результатов:', 220, 60);

  // Вычисление максимального значения

  var getMaxValue = function (anyArray) {
    var maxValue = -1;

    for (var index = 0; index < anyArray.length; index++) {
      if (anyArray[index] > maxValue) {
        maxValue = anyArray[index];
      }
    }
    return maxValue;
  };

  // Определение цвета

  var getColorPlayer = function (player) {
    if (player === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    } else {
      return 'rgba(0, 0, 255, ' + (Math.random() + 0.1).toFixed(1) + ')';
    }
  };

  // Построение гистограммы

  var histogramHeight = 150;
  var initialX = 150;
  var initialY = 245;
  var columnIndent = 90;
  var columnWidth = 40;
  var lineHeight = 20;

  for (j = 0; j < times.length; j++) {
    var playerTime = Math.round(times[j]);
    var columnHeight = playerTime * histogramHeight / (getMaxValue(times) - 0);

    ctx.fillStyle = getColorPlayer(names[j]);
    ctx.fillRect(initialX + j * columnIndent, initialY, columnWidth, columnHeight * (-1));

    ctx.fillStyle = '#000000';
    ctx.fillText(playerTime, initialX + j * columnIndent, initialY - columnHeight - lineHeight / 2);
    ctx.fillText(names[j], initialX + j * columnIndent, initialY + lineHeight);
  }

};
