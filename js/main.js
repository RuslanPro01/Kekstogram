const getRandomNumber = (minNumber, maxNumber) => {
  if (minNumber > maxNumber) {
    const mindNumber = minNumber;
    minNumber = maxNumber;
    maxNumber = mindNumber;
  }

  minNumber = (minNumber < 0) ? minNumber * -1 : minNumber;
  maxNumber = (maxNumber < 0) ? maxNumber * -1 : maxNumber;

  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);

  return Math.floor(Math.random() * (max - min)) + min;
};

const checkStringLength = (string, maxStringLength) => {
  const length = String(string).length;
  const number = Number(maxStringLength);

  return length <= number;
};

const fillArrayWithNumbers = (array, minValue, maxValue) => {
  for (let i = minValue; i <= maxValue; i++) {
    array.push(i);
  }
  return array;
};

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

const DESCRIPTIONS = [
  'Архитектурная башня – удивительное и красивое здание, выделяющееся среди всех остальных. Он был разработан, чтобы стать прекрасным примером архитектурного совершенства, с его поразительно современным дизайном и элегантным внешним видом. Башня изготовлена из различных материалов, включая, помимо прочего, сталь, стекло и пластик. Это внушительное сооружение прекрасно выглядит независимо от погодных условий снаружи.',
  'С возвышенности можно увидеть красивую интересную архитектуру башню зеленую великолепную чистую убогую хорошо еловую гору снежную. Архитектурная башня ярко окрашена с учетом чистоты здания. Он величественно возвышается вдалеке и выделяется своей чистотой. Архитектура хорошо украшена, много зелени, что делает его красивым местом. Спускаясь с холма, вы можете увидеть башню под разными углами и при разном освещении. Это великолепное место с любого ракурса. Архитектура очень хорошо сохранилась, и чистота района очевидна.',
  'Чистота территории имеет жизненно важное значение, и это видно по тому, как она поддерживается. Все аккуратно и на своих местах. Мусора нет, территория чистая и аккуратная. Архитектура является хорошим примером этого, так как она чистая и хорошо сохранившаяся. Территория благоустроена, все на своих местах. Территория благоустроена, и чистота территории имеет жизненно важное значение.',
  'Район хорошо организован, и чистота района имеет жизненно важное значение. Архитектура является хорошим примером того, насколько зеленый район. Архитектура является хорошим примером того, насколько великолепно зеленый район.'
];

const createPhotoDescription = (descriptionsArray) => DESCRIPTIONS[getRandomNumber(0, descriptionsArray.length)];

const MASSAGES_EXPRESSION = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const createMassage = (arrayExpression) => {
  const numberExpression = getRandomNumber(1, 3);
  if (numberExpression === 1) {
    return arrayExpression[getRandomNumber(0, arrayExpression.length)];
  } else if (numberExpression === 2) {
    return `${arrayExpression[getRandomNumber(0, arrayExpression.length)]} ${arrayExpression[getRandomNumber(0, arrayExpression.length -1)]}`;
  }
};

const NAMES = [
  'Дарья',
  'Мирослава',
  'Глеб',
  'Макар',
  'Александр',
  'Кирилл',
  'Владимир',
  'Константин',
  'Алина',
  'Герман',
  'Диана',
  'Виктория',
  'Василиса',
  'Ника',
  'Леонид',
  'Евгения',
  'Ева',
  'Александра',
  'Ибрагим',
  'Артём'
];

const createName = (arrayNames) => arrayNames[getRandomNumber(0, arrayNames.length)];

const createComments = (countComments = getRandomNumber(1, 5)) => {
  const arrayWithAvatarUrl = [];
  const arrayWithCommentId = [];
  fillArrayWithNumbers(arrayWithAvatarUrl, 1, countComments + 1);
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
