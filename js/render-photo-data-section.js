import {containerUsersPicture} from './miniature-picture.js';
import {BODY} from './constants.js';

const photoDataSection = document.querySelector('.big-picture');
const photoDataSectionCloseButton = photoDataSection.querySelector('.big-picture__cancel');

const fullSizePhoto = photoDataSection.querySelector('.big-picture__img img');
const likesCount = photoDataSection.querySelector('.likes-count');
const commentsCount = photoDataSection.querySelector('.comments-count');
const countVisibleComments = photoDataSection.querySelector('.featured-comments');
const listSocialComments = photoDataSection.querySelector('.social__comments');
const socialComment = listSocialComments.querySelector('.social__comment');
const photoDescription = photoDataSection.querySelector('.social__caption');
const commentLoader = photoDataSection.querySelector('.comments-loader');

const countShownComments = () => listSocialComments.querySelectorAll('.social__comment').length - listSocialComments.querySelectorAll('.social__comment.hidden').length;

let defaultValueVisibleComments = 5;
let numberCommentsToDraw = 5;

const hideComments = (commentsReceived) => {
  defaultValueVisibleComments = 5;
  numberCommentsToDraw = 5;
  let index = commentsReceived.length;
  while (index > defaultValueVisibleComments) {
    commentsReceived[index - 1].classList.add('hidden');
    index -= 1;
  }
  countVisibleComments.textContent = countShownComments();
};

const onCommentLoaderClick = () => {
  let index = defaultValueVisibleComments;
  numberCommentsToDraw += 5;
  const displayedComments = listSocialComments.querySelectorAll('.social__comment');
  if (numberCommentsToDraw > displayedComments.length) {numberCommentsToDraw = displayedComments.length;}
  while (index < numberCommentsToDraw) {
    displayedComments[index].classList.remove('hidden');
    index++;
  }
  countVisibleComments.textContent = countShownComments();
  if (index === displayedComments.length) {
    commentLoader.classList.add('hidden');
  }
};

function renderPhotoDataSection(publications) {
  containerUsersPicture.addEventListener('click', (evt) => {
    if (evt.target.className === 'picture__img') {
      const {url, likes, comments, description} = publications[evt.target.dataset.photoNumber - 1];
      fullSizePhoto.src = url;
      likesCount.textContent = likes;
      commentsCount.textContent = comments.length;
      photoDescription.textContent = description;
      const commentFragment = document.createDocumentFragment();
      comments.forEach(({avatar, message, name}) => {
        const socialCommentElement = socialComment.cloneNode(true);
        const socialPicture = socialCommentElement.querySelector('.social__picture');
        const socialText = socialCommentElement.querySelector('.social__text');
        socialCommentElement.setAttribute('title', `Комментарий пользователья ${name}`);
        socialPicture.src = avatar;
        socialPicture.setAttribute('alt', name);
        socialText.textContent = message;
        commentFragment.append(socialCommentElement);
        commentLoader.classList.remove('hidden');
      });
      if (comments.length <= 5) {
        commentLoader.classList.add('hidden');
      }
      listSocialComments.innerHTML = '';
      listSocialComments.append(commentFragment);
      const commentsReceived = listSocialComments.querySelectorAll('.social__comment');
      hideComments(commentsReceived);
      commentLoader.addEventListener('click', onCommentLoaderClick);
    }
  });
}

const closeBigPictureModal = () => {
  photoDataSection.classList.add('hidden');
  BODY.classList.remove('modal-open');
  commentLoader.removeEventListener('click', onCommentLoaderClick);
};

const onBigPictureCancelClick = () => {
  closeBigPictureModal();
};

const onThumbnailClick = (evt) => {
  if (evt.target.className === 'picture__img') {
    photoDataSection.classList.remove('hidden');
    BODY.classList.add('modal-open');
    photoDataSectionCloseButton.addEventListener('click', onBigPictureCancelClick);
  }
};

containerUsersPicture.addEventListener('click', onThumbnailClick);

export {renderPhotoDataSection, photoDataSection};
