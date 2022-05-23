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

export {getRandomNumber, checkStringLength, fillArrayWithNumbers};
