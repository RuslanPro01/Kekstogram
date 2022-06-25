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

const showAlert = (massage) => {
  const alertBlock = document.createElement('div');
  alertBlock.style.position = 'absolute';
  alertBlock.style.top = '0';
  alertBlock.style.left = '0';
  alertBlock.style.right = '0';
  alertBlock.style.padding = '10px';
  alertBlock.style.zIndex = '100';
  alertBlock.style.fontSize = '20px';
  alertBlock.style.backgroundColor = '#FD4C4C';
  alertBlock.style.color = '#FFF';
  alertBlock.style.textAlign = 'center';
  alertBlock.style.textTransform = 'none';
  alertBlock.innerHTML = massage;
  document.body.prepend(alertBlock);
  setTimeout(() => alertBlock.remove(), 5000);
};

export {getRandomNumber, checkStringLength, fillArrayWithNumbers, showAlert};
