import {EFFECTS} from './constants.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const scaleControlSmaller = imgUploadOverlay.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadOverlay.querySelector('.scale__control--bigger');
const scaleControl = imgUploadOverlay.querySelector('.scale__control--value');
const imgUploadPreview = imgUploadOverlay.querySelector('.img-upload__preview');
const imgUploadPreviewInner = imgUploadOverlay.querySelector('.img-upload__preview img');

let scaleControlValue = 100;
scaleControl.value = `${scaleControlValue}%`;

scaleControlSmaller.addEventListener('click', () => {
  if (scaleControlValue > 25) {
    scaleControlValue -= 25;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreview.style.transform = `scale(${scaleControlValue / 100})`;
  }
});

scaleControlBigger.addEventListener('click', () => {
  if (scaleControlValue < 100) {
    scaleControlValue += 25;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreview.style.transform = `scale(${scaleControlValue / 100})`;
  }
});

const effectLevelSlider = imgUploadOverlay.querySelector('.effect-level__slider');
const effectLevelValue = imgUploadOverlay.querySelector('.effect-level__value');

noUiSlider.create(effectLevelSlider, {
  start: 1,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 1
  },
  step: 0.1,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});
effectLevelSlider.classList.add('visually-hidden');

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
});

const effectsList = document.querySelector('.effects__list');

const resetPhotoEffects = () => {
  effectLevelSlider.classList.add('visually-hidden');
  imgUploadPreviewInner.style.filter = null;
  imgUploadPreviewInner.removeAttribute('class');
  effectLevelValue.value = null;
};

effectsList.addEventListener('change', (evt) => {
  if (evt.target.checked && evt.target.id === 'effect-none') {
    resetPhotoEffects();
  }
  for (let i = 0; i < EFFECTS.length; i++) {
    const classEffect = EFFECTS[i].className;
    if (evt.target.checked && evt.target.id === EFFECTS[i].idName) {
      effectLevelSlider.classList.remove('visually-hidden');
      imgUploadPreviewInner.className = classEffect;
      const imageWithClassEffect = imgUploadPreview.querySelector(`.${classEffect}`);
      effectLevelSlider.noUiSlider.updateOptions({
        start: EFFECTS[i].maxValue,
        range: {
          'min': EFFECTS[i].minValue,
          'max': EFFECTS[i].maxValue
        },
        step: EFFECTS[1].stepSlider
      });
      effectLevelSlider.noUiSlider.on('update', () => {
        imageWithClassEffect.style.filter = `${EFFECTS[i].filterType}(${effectLevelValue.value}${EFFECTS[i].unit})`;
      });
    }
  }
});

export {scaleControl, imgUploadPreview, imgUploadPreviewInner, resetPhotoEffects};
