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
let hashtagValidExp = /^#[a-zA-ZА-Яа-яЁё]{1,20}$/;

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const valid = pristine.validate();
  valid === true ? console.log('Valid') : console.log('NotValid');
});

imgUploadForm.addValidator(textHashtags, (value) => {
  value.split('')
});
