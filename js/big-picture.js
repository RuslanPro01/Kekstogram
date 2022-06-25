import {containerUsersPicture} from './miniature-picture.js';
import {BODY} from './constants.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const closeBigPictureModal = () => {
  bigPicture.classList.add('hidden');
  BODY.classList.remove('modal-open');
};

const onBigPictureCancelClick = () => {
  closeBigPictureModal();
};

const onThumbnailClick = (evt) => {
  if (evt.target.className === 'picture__img') {
    bigPicture.classList.remove('hidden');
    BODY.classList.add('modal-open');
    bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  }
};

containerUsersPicture.addEventListener('click', onThumbnailClick);

export {bigPicture};
