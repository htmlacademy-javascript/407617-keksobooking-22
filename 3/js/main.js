'use strict';

const SIMILAR_COUNT = 10;

const TITLES = [
  'Хостел на окраине "Смотри в оба"',
  'Квартира в ЖК "Вестибюль"',
  'Палатка в палаточном городке "Freedom',
  'Дом "Самый"',
  'Идокопаский дворец',
];

const DESCRIPTIONS = [
  'Всё самое лучшее у нас. И чистый воздух',
  'Тёплая, уютная, всегда с чистыми окнами',
  'Эксклюзив, дающий свободу. Отдых LUX',
  'Нисколько не страшный, наоборот очень привлекательный своей вековой аутентичностью',
  'Верх. ТОП. Вам такое не снилось никогда. Для одного',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const MIN_PRICE = 100;
const MAX_PRICE = 20000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 4;
const MIN_GUESTS = 1;
const MAX_GUESTS = 6;

const X_MIN = 35.65000;
const X_MAX = 35.70000;
const Y_MIN = 139.70000;
const Y_MAX = 139.80000;

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

// // Функция, возвращающая массив случайной длины из значений массива.
// const getRandomArray = (newArray) => {
//   const randomArrayIndex = getRandomInt(0, newArray.length - 1);
//   shuffle(newArray);
//   return newArray.slice(randomArrayIndex);
// };

const createPromo = () => {
  let x = getRandomFloat(X_MIN, X_MAX, 5);
  let y = getRandomFloat(Y_MIN, Y_MAX, 5);
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInt(1, 8) + '.png',
    },
    offer: {
      title: TITLES[getRandomInt(0, TITLES.length - 1)],
      address: Number(x) + ', ' + Number(y),
      price: getRandomInt(MIN_PRICE, MAX_PRICE),
      type: TYPES[getRandomInt(0, TYPES.length - 1)],
      rooms: getRandomInt(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomInt(MIN_GUESTS, MAX_GUESTS),
      checkin: CHECK_TIME[getRandomInt(0, CHECK_TIME.length - 1)],
      checkout: CHECK_TIME[getRandomInt(0, CHECK_TIME.length - 1)],
      features: getShuffle(FEATURES),
      description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS - 1)],
      photos: getShuffle(PHOTOS),
    },
    location: {
      x: x,
      y: y,
    },
  };
};

// const similarPromo = new Array(SIMILAR_COUNT).fill(null).map(() => createPromo())
const similarPromo = (newArray) => {
  for (let i = 0; i <= SIMILAR_COUNT; i++) {
    newArray[i] = createPromo();
  }
  return newArray;
}

similarPromo();
