// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0) {
    throw 'Ошибка. Пожалуйста, введите число от 0 и больше. Минимальное число должно быть меньше максимального';
  }
  return Math.floor(Math.random() * (max - min)) + min;
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomFloat = (minNumb, maxNumb, simbolsAfterComma) => {
  if (maxNumb <= minNumb || minNumb < 0) {
    throw 'Ошибка. Пожалуйста, введите число от 0 и больше. Минимальное число должно быть меньше максимального';
  }
  return (Math.random() * (minNumb - maxNumb) + maxNumb).toFixed(simbolsAfterComma);
}

// Функция, которая перемешивает (переупорядочивает случайным образом) элементы массива.
let getShuffle = (array) => {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray.slice(getRandomInt(0, array.length-1));
}

export {getRandomInt, getRandomFloat, getShuffle};
