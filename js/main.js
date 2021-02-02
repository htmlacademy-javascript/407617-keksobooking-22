// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInt = (min, max) => {
  if (min >= max) {
    console.log('Ошибка. Пожалуйста, введите другое значение. Минимальное число должно быть меньше максимального');
    return -1;
  }
  if (min >= 0 && max >= 0) {
    return Math.trunc(Math.random() * (max - min + 1) + min);
  }
  console.log('Ошибка. Пожалуйста, введите число от 0 и больше');
  return -1;
}

getRandomInt(2, 8);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomFloat = (minNumber, maxNumber, numbersAfterComma) => {
  if (minNumber >= maxNumber) {
    console.log('Ошибка. Пожалуйста, введите другое значение. Минимальное число должно быть меньше максимального');
    return -1;
  }
  if (minNumber >= 0 && maxNumber >= 0) {
    return Number((Math.random() * (maxNumber - minNumber) + minNumber).toFixed(numbersAfterComma));
  }
  console.log('Ошибка. Пожалуйста, введите число от 0 и больше');
  return -1;
}

getRandomFloat(0.8, 63, 2);
