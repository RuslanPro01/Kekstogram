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

let photoNumber = 0;

const onThumbnailClick = (evt) => {
  if (evt.target.className === 'picture__img') {
    bigPicture.classList.remove('hidden');
    BODY.classList.add('modal-open');
    bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
    photoNumber = evt.target.dataset.photoNumber;
  }
};

containerUsersPicture.addEventListener('click', onThumbnailClick);
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPictureModal();
  }
});

export {bigPicture, photoNumber};
