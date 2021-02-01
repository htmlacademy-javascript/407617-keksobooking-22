// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getNumbers = (min, max) => {
  if (min >= max) {
    return 'Ошибка. Пожалуйста, введите другое значение. Минимальное число должно быть меньше максимального';
  }  else  {
    if (min >= 0 && max >= 0) {
      return Math.trunc(Math.random() * (max - min + 1) + min);
    }
    return'Ошибка. Пожалуйста, введите число от 0 и больше';
  }
}

getNumbers(2, 8);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getCoordinates = (firstCoordinate, secondCoordinate, lengthCoorinates) => {
  if (firstCoordinate >= secondCoordinate) {
    return 'Ошибка. Пожалуйста, введите другое значение. Минимальное число должно быть меньше максимального';
  }  else {
    if (firstCoordinate >= 0 && secondCoordinate >= 0) {
      return Number((Math.random() * (secondCoordinate - firstCoordinate + 1) + firstCoordinate).toFixed(lengthCoorinates));
    }
    return 'Ошибка. Пожалуйста, введите число от 0 и больше';
  }
}

getCoordinates(0.8, 63, 2);
