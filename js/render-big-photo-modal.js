import {containerUsersPicture} from './miniature-picture.js';
import {BODY} from './constants.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const featuredComments = bigPicture.querySelector('.featured-comments');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentLoader = bigPicture.querySelector('.comments-loader');

const countShownComments = () => socialComments.querySelectorAll('.social__comment').length - socialComments.querySelectorAll('.social__comment.hidden').length;

let canShow = 5;
let amountDraw = 5;

const hideComments = (commentsReceived) => {
  canShow = 5;
  amountDraw = 5;
  let index = commentsReceived.length;
  while (index > canShow) {
    commentsReceived[index - 1].classList.add('hidden');
    index -= 1;
  }
  featuredComments.textContent = countShownComments();
};

const onCommentLoaderClick = () => {
  let index = canShow;
  amountDraw += 5;
  const displayedComments = socialComments.querySelectorAll('.social__comment');
  if (amountDraw > displayedComments.length) {amountDraw = displayedComments.length;}
  while (index < amountDraw) {
    displayedComments[index].classList.remove('hidden');
    index++;
  }
  featuredComments.textContent = countShownComments();
  if (index === displayedComments.length) {
    commentLoader.classList.add('hidden');
  }
};

function renderBigPhotoModal(publications) {
  containerUsersPicture.addEventListener('click', (evt) => {
    if (evt.target.className === 'picture__img') {
      const {url, likes, comments, description} = publications[evt.target.dataset.photoNumber - 1];
      bigPictureImg.src = url;
      likesCount.textContent = likes;
      commentsCount.textContent = comments.length;
      socialCaption.textContent = description;
      const commentFragment = document.createDocumentFragment();
      comments.forEach(({avatar, message}) => {
        const socialCommentElement = socialComment.cloneNode(true);
        const socialPicture = socialCommentElement.querySelector('.social__picture');
        const socialText = socialCommentElement.querySelector('.social__text');
        socialPicture.src = avatar;
        socialText.textContent = message;
        commentFragment.append(socialCommentElement);
        commentLoader.classList.remove('hidden');
        if (comments.length <= 5) {
          commentLoader.classList.add('hidden');
        }
      });
      socialComments.innerHTML = '';
      socialComments.append(commentFragment);
      const commentsReceived = socialComments.querySelectorAll('.social__comment');
      hideComments(commentsReceived);
      commentLoader.addEventListener('click', onCommentLoaderClick);
    }
  });
}

const closeBigPictureModal = () => {
  bigPicture.classList.add('hidden');
  BODY.classList.remove('modal-open');
  commentLoader.removeEventListener('click', onCommentLoaderClick);
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

export {renderBigPhotoModal, bigPicture};
