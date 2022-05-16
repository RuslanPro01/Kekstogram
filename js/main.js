function getRandomNumber(minNumber, maxNumber) {
  if (minNumber > maxNumber) {
    const mindNumber = minNumber;
    minNumber = maxNumber;
    maxNumber = mindNumber;
  }

  minNumber = (minNumber < 0) ? minNumber + (minNumber * -1) : minNumber;
  maxNumber = (maxNumber < 0) ? maxNumber + (maxNumber * -1) : maxNumber;

  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);

  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomNumber(25, -20);

function examineStringLength(string, maxStringLength) {
  const length = String(string).length;
  const number = Number(maxStringLength);

  return length <= number;
}

examineStringLength(2568845, 3);
