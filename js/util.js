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

const createRandomArray = (arrayLength) => {
  const a1 = [];
  for (let i = 0; i < arrayLength; i++) {
    a1.push(i);
  }
  const a2 = [];
  while (a1.length) {
    const pos = Math.random() * a1.length;
    const element = a1.splice(pos, 1)[0];
    a2.push(element);
  }
  return a2;
};

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

function debounce(callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;
  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);
    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}


export {getRandomNumber, checkStringLength, fillArrayWithNumbers, showAlert, createRandomArray, debounce};
