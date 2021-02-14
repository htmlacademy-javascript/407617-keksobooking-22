import {SIMILAR_COUNT, TITLES, DESCRIPTIONS, TYPES, ROOMS, GUESTS, CHECK_TIMES, FEATURES, PHOTOS, MIN_PRICE, MAX_PRICE, X_MIN, X_MAX, Y_MIN, Y_MAX} from './const.js';
import {getRandomInt, getRandomFloat, getShuffle} from './util.js';

const createPromo = () => {
  const x = getRandomFloat(X_MIN, X_MAX, 5);
  const y = getRandomFloat(Y_MIN, Y_MAX, 5);
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInt(1, 8) + '.png',
    },
    offer: {
      title: TITLES[getRandomInt(0, TITLES.length - 1)],
      address: Number(x) + ', ' + Number(y),
      price: getRandomInt(MIN_PRICE, MAX_PRICE),
      type: TYPES[getRandomInt(0, TYPES.length - 1)],
      rooms: ROOMS[getRandomInt(0, ROOMS.length - 1)],
      guests: GUESTS[getRandomInt(0, GUESTS.length - 1)],
      checkin: CHECK_TIMES[getRandomInt(0, CHECK_TIMES.length - 1)],
      checkout: CHECK_TIMES[getRandomInt(0, CHECK_TIMES.length - 1)],
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
const createSimilarPromo = (newArray) => {
  for (let i = 0; i <= SIMILAR_COUNT; i++) {
    newArray[i] = createPromo();
  }
  return newArray;
}

export {createSimilarPromo};
