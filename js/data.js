import {getRandomNumber, fillArrayWithNumbers} from './util.js';
import {NAMES, MASSAGES_EXPRESSION, DESCRIPTIONS} from './constants.js';

const getUniqueId = (array) => {
  const elementArrayId =  getRandomNumber(0, array.length);
  const elementId = array[elementArrayId];
  array.splice(elementArrayId, 1);

  return elementId;
};

const createUrl = (typeImg, uniqueElement) => {
  if (typeImg === 1) {
    return `photos/${uniqueElement}.jpg`;
  } else if (typeImg === 2) {
    return `img/avatar-${uniqueElement}.svg`;
  }
};

const createPhotoDescription = (descriptionsArray) => DESCRIPTIONS[getRandomNumber(0, descriptionsArray.length)];

const createMassage = (arrayExpression) => {
  const numberExpression = getRandomNumber(1, 3);
  if (numberExpression === 1) {
    return arrayExpression[getRandomNumber(0, arrayExpression.length)];
  } else if (numberExpression === 2) {
    return `${arrayExpression[getRandomNumber(0, arrayExpression.length)]} ${arrayExpression[getRandomNumber(0, arrayExpression.length -1)]}`;
  }
};

const createName = (arrayNames) => arrayNames[getRandomNumber(0, arrayNames.length)];

const createComments = (countComments = getRandomNumber(1, 6)) => {
  const arrayWithAvatarUrl = [];
  const arrayWithCommentId = [];
  fillArrayWithNumbers(arrayWithAvatarUrl, 1, countComments);
  fillArrayWithNumbers(arrayWithCommentId, 100, (countComments + 10) * 10);
  const createComment = () => ({
    id: getUniqueId(arrayWithCommentId),
    avatar: createUrl(2, getUniqueId(arrayWithAvatarUrl)),
    message: createMassage(MASSAGES_EXPRESSION),
    name: createName(NAMES)
  });
  return Array.from({length: countComments}, createComment);
};

const createPublications = (numberPublications = 25, numberComments) => {
  const arrayWithDescId = [];
  const arrayWithImgUrl = [];
  fillArrayWithNumbers(arrayWithDescId, 1, numberPublications);
  fillArrayWithNumbers(arrayWithImgUrl, 1, numberPublications);
  const createPublication = () => ({
    id: getUniqueId(arrayWithDescId),
    url: createUrl(1, getUniqueId(arrayWithImgUrl)),
    description: createPhotoDescription(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: createComments(numberComments)
  });
  return Array.from({length: numberPublications}, createPublication);
};

//export {createPublications};
