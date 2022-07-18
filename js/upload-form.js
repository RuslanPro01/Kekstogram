import {BODY} from './constants.js';
import {sendForm} from './api.js';
import {photoDataSection} from './render-photo-data-section.js';
import {resetPhotoEffects} from './image-editing.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const imgOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const uploadCancel = imgUploadForm.querySelector('#upload-cancel');
const imgUploadSubmit = imgUploadForm.querySelector('.img-upload__submit');

const closeModalForm = () => {
  imgOverlay.classList.add('hidden');
  BODY.classList.remove('modal-open');
  imgUploadForm.reset();
};

const onFileUploadClick = () => {
  imgOverlay.classList.remove('hidden');
  BODY.classList.add('modal-open');
};

const onUploadCancelClick = () => {
  closeModalForm();
  imgUploadForm.reset();
  resetPhotoEffects();
};

uploadFile.addEventListener('change', onFileUploadClick);
uploadCancel.addEventListener('click', onUploadCancelClick);

const defaultConfig = {
  classTo: 'text__container',
  errorClass: 'has-danger',
  errorTextParent: 'text__container',
  errorTextTag: 'div',
  errorTextClass: 'text-help'
};

const pristine = new Pristine(imgUploadForm, defaultConfig);
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textInputs = imgUploadForm.querySelectorAll('.text-input');
const hashtagValidExp = /^#[a-zA-ZА-Яа-яЁё]{1,20}$/;

pristine.addValidator(textHashtags, (value) => {
  if (value === '') {
    return true;
  }
  const hashtags = value.split(' ');
  const isEveryHashtagsValid = hashtags.every((hashtag) => hashtagValidExp.test(hashtag));
  if (hashtags.length > 5) {
    return false;
  }
  return isEveryHashtagsValid;
}, 'Проверь, стоит ли у хештега хеш «#», разделяй их пробелом, не используй другие символы');

const blockSubmitButton = (button, buttonText = 'Отправляем') => {
  button.disabled = true;
  button.textContent = buttonText;
};

const unblockSubmitButton = (button, buttonText = 'Опубликовать') => {
  button.disabled = false;
  button.textContent = buttonText;
};

const closeMassage = (massage) => {
  massage.classList.add('hidden');
};

const successMassage = document.querySelector('#success').content.querySelector('.success');
successMassage.classList.add('hidden');
const successButton = successMassage.querySelector('.success__button');

const onSuccessMassageSectionClick = (evt) => {
  if (evt.target.className === 'success') {
    closeMassage(successMassage);
  }
};

const onSuccessButtonClick = () => {
  closeMassage(successMassage);
};

const onSuccess = () => {
  closeModalForm();
  imgUploadForm.reset();
  resetPhotoEffects();
  BODY.insertAdjacentElement('beforeend', successMassage);
  successMassage.classList.remove('hidden');
  successButton.addEventListener('click', onSuccessButtonClick);
  successMassage.addEventListener('click', onSuccessMassageSectionClick);
  unblockSubmitButton(imgUploadSubmit);
};

const errorMassage = document.querySelector('#error').content.querySelector('.error');
errorMassage.classList.add('hidden');
const errorButton = errorMassage.querySelector('.error__button');

const onErrorMassageSectionClick = (evt) => {
  if (evt.target.className === 'error') {
    closeMassage(errorMassage);
  }
};

const onErrorButtonClick = () => {
  closeMassage(errorMassage);
};

const fail = () => {
  BODY.insertAdjacentElement('beforeend', errorMassage);
  errorMassage.classList.remove('hidden');
  errorMassage.style.zIndex = '100';
  errorButton.addEventListener('click', onErrorButtonClick);
  errorMassage.addEventListener('click', onErrorMassageSectionClick);
  unblockSubmitButton(imgUploadSubmit);
};

const onEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    if (!imgOverlay.classList.contains('hidden') && errorMassage.classList.contains('hidden') && successMassage.classList.contains('hidden')) {
      closeModalForm();
    }
    if (!imgOverlay.classList.contains('hidden') && !errorMassage.classList.contains('hidden')) {
      closeMassage(errorMassage);
      BODY.classList.add('modal-open');
    }
    if (imgOverlay.classList.contains('hidden') && !successMassage.classList.contains('hidden')) {
      closeMassage(successMassage);
    }
    if (!photoDataSection.classList.contains('hidden')) {
      photoDataSection.classList.add('hidden');
      BODY.classList.remove('modal-open');
    }
  }
};

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(evt.target);
    blockSubmitButton(imgUploadSubmit);
    sendForm(formData, onSuccess, fail);
  }
});

BODY.addEventListener('keydown', onEscapeKeydown);

textInputs.forEach((textInput) => {
  textInput.addEventListener('keydown', (evt) => {
    evt.stopPropagation();
  });
});

export {uploadFile};
