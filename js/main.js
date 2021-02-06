'use strict';

// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0 || max < 0) {
    throw 'Ошибка. Пожалуйста, число от 0 и больше. Минимальное число должно быть меньше максимального';
  }
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(0, 3);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomFloat = (minNumb, maxNumb, simbolsAfterComma) => {
  if (maxNumb <= minNumb || minNumb < 0 || maxNumb < 0) {
    throw 'Ошибка. Пожалуйста, число от 0 и больше. Минимальное число должно быть меньше максимального';
  }
  return (Math.random() * (minNumb - maxNumb) + maxNumb).toFixed(simbolsAfterComma);
}
getRandomFloat(0, 2, 3);
