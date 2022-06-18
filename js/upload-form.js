import {BODY} from './constants.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const imgOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const uploadCancel = imgUploadForm.querySelector('#upload-cancel');

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
};

const onEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModalForm();
  }
};

uploadFile.addEventListener('change', onFileUploadClick);
uploadCancel.addEventListener('click', onUploadCancelClick);
BODY.addEventListener('keydown', onEscapeKeydown);

const pristine = new Pristine(imgUploadForm);
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textInput = imgUploadForm.querySelector('.text-input');
const hashtagValidExp = /^#[a-zA-ZА-Яа-яЁё]{1,20}$/;

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(evt.target);
    fetch('https://25.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      });
  }
});

pristine.addValidator(textHashtags, (value) => {
  const hashtags = value.split(' ');
  const isEveryHashtagsValid = hashtags.every((hashtag) => hashtagValidExp.test(hashtag));

  if (hashtags.length > 5) {
    return false;
  }
  return isEveryHashtagsValid;
});

textInput.addEventListener('focus', () => {
  BODY.removeEventListener('keydown', onEscapeKeydown);
});

textInput.addEventListener('blur', () => {
  BODY.addEventListener('keydown', onEscapeKeydown);
});
