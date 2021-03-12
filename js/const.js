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

const ROOMS = {
  min: 1,
  max: 100,
};

const GUESTS = {
  min: 1,
  max: 27,
};

const AVATAR = {
  min: 1,
  max: 8,
};

const CHECK_TIMES = [
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

const PRICE = {
  min: 100,
  max: 20000,
};

const X_MIN = 35.65000;
const X_MAX = 35.70000;
const Y_MIN = 139.70000;
const Y_MAX = 139.80000;

export {SIMILAR_COUNT, TITLES, DESCRIPTIONS, TYPES, ROOMS, GUESTS, AVATAR, CHECK_TIMES, FEATURES, PHOTOS, PRICE, X_MIN, X_MAX, Y_MIN, Y_MAX};
