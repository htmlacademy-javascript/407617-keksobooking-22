import {TYPES} from './const.js';
import {createPromoList} from './data.js';
import {numIncline, getDeleteChild} from './utils.js';

const card = document.querySelector('#card').content;
const fragment = document.createDocumentFragment();
let map = document.querySelector('.map__canvas');

const getFeatureElements = (currentArray, featureFragment) => {
  currentArray.forEach(featureTitle => {
    let newFeature = document.createElement('li');
    newFeature.classList.add('popup__feature');
    newFeature.classList.add('popup__feature--' + featureTitle);
    featureFragment.appendChild(newFeature);
  });
};

const getImageElements = (imageArray, photo, imageFragment) => {
  imageArray.forEach(image => {
    let imageClone = photo.cloneNode();
    imageClone.src = image;
    imageFragment.appendChild(imageClone);
  });
};

for (let i = 0; i < createPromoList.length; i++) {
  const cardClone = card.cloneNode(true);
  let offerTitle = cardClone.querySelector('.popup__title');
  let offerAdress = cardClone.querySelector('.popup__text--address');
  let offerPrice = cardClone.querySelector('.popup__text--price');
  let offerType = cardClone.querySelector('.popup__type');
  let offerCapacity = cardClone.querySelector('.popup__text--capacity');
  let offerTextTime = cardClone.querySelector('.popup__text--time');
  let offerFeatures = cardClone.querySelector('.popup__features');
  let offerDescription = cardClone.querySelector('.popup__description');
  let offerPhotos = cardClone.querySelector('.popup__photos');
  let offerPhoto = cardClone.querySelector('.popup__photo');
  let authorAvatar = cardClone.querySelector('.popup__avatar');
  offerTitle.textContent = createPromoList[i].offer.title;
  offerAdress.textContent = createPromoList[i].offer.address;
  offerPrice.textContent = ` ${createPromoList[i].offer.price} ₽/ночь`;
  offerCapacity.textContent = `${createPromoList[i].offer.rooms} ${numIncline(createPromoList[i].offer.rooms, ['комната', 'комнаты', 'комнат'])} для ${createPromoList[i].offer.guests} гостей`;
  offerTextTime.textContent = `Заезд после ${createPromoList[i].offer.checkin} выезд до ${createPromoList[i].offer.checkout}`;
  getDeleteChild(offerFeatures);
  getDeleteChild(offerPhotos);
  getFeatureElements(createPromoList[i].offer.features, offerFeatures);
  getImageElements(createPromoList[i].offer.photos, offerPhoto, offerPhotos);
  offerDescription.textContent = createPromoList[i].offer.description;
  authorAvatar.src = createPromoList[i].author.avatar;

  switch (createPromoList[i].offer.type) {
    case TYPES[0]:
      offerType.textContent = 'Квартира';
      break;
    case TYPES[1]:
      offerType.textContent = 'Бунгало';
      break;
    case TYPES[2]:
      offerType.textContent = 'Дом';
      break;
    case TYPES[3]:
      offerType.textContent = 'Дворец';
      break;
  }

  fragment.appendChild(cardClone);
}

map.appendChild(fragment.firstElementChild);
