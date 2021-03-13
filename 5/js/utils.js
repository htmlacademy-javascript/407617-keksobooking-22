const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0) {
    throw 'Ошибка. Пожалуйста, введите число от 0 и больше. Минимальное число должно быть меньше максимального';
  }
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomFloat = (min, max, decimals = 1) => {
  if (max <= min || min < 0) {
    throw 'Ошибка. Пожалуйста, введите число от 0 и больше. Минимальное число должно быть меньше максимального';
  }
  return (Math.random() * (min - max) + max).toFixed(decimals);
  // const result = Math.random() * (max - min) + min;
  // return result.toFixed(decimals);
}

const getRandomArrayValues = (arrayName) => {
  return arrayName.slice(getRandomInt(0, arrayName.length - 1));
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)]
};

const numIncline = (num, words) => {
  num = Math.abs(num) % 100;
  let num1 = num % 10;
  if (num > 10 && num < 20) {
    return words[2];
  }
  if (num1 > 1 && num1 < 5) {
    return words[1];
  }
  if (num1 === 1) {
    return words[0];
  }
  return words[2];
};

const getDeleteChild = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.lastChild);
  }
};

export {getRandomInt, getRandomFloat, getRandomArrayValues, getRandomArrayElement, numIncline, getDeleteChild};
