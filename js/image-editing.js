const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const scaleControlSmaller = imgUploadOverlay.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadOverlay.querySelector('.scale__control--bigger');
const scaleControl = imgUploadOverlay.querySelector('.scale__control--value');
const imgUploadPreview = imgUploadOverlay.querySelector('.img-upload__preview');

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
