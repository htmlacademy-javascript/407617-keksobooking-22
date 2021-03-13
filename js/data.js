import {SIMILAR_COUNT, TITLES, DESCRIPTIONS, TYPES, ROOMS, GUESTS, AVATAR, CHECK_TIMES, FEATURES, PHOTOS, PRICE, X_MIN, X_MAX, Y_MIN, Y_MAX} from './const.js';
import {getRandomInt, getRandomFloat, getRandomArrayValues, getRandomArrayElement} from './utils.js';

const createPromo = () => {
  const LOCATION_X = getRandomFloat(X_MIN, X_MAX, 5);
  const LOCATION_Y = getRandomFloat(Y_MIN, Y_MAX, 5);
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInt(AVATAR.min, AVATAR.max) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: getRandomFloat(LOCATION_X) + ', ' + getRandomFloat(LOCATION_Y),
      price: getRandomInt(PRICE.min, PRICE.max),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(ROOMS.min, ROOMS.max),
      guests: getRandomInt(GUESTS.min, GUESTS.max),
      checkin: getRandomArrayElement(CHECK_TIMES),
      checkout: getRandomArrayElement(CHECK_TIMES),
      features: getRandomArrayValues(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayValues(PHOTOS),
    },
    location: {
      x: LOCATION_X,
      y: LOCATION_Y,
    },
  };
};

const createPromoList = new Array(SIMILAR_COUNT).fill(null).map(() => createPromo());
export {createPromoList};
