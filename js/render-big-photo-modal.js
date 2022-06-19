import {bigPicture, photoNumber} from './big-picture.js';
import {containerUsersPicture} from './miniature-picture.js';

const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const socialCaption = bigPicture.querySelector('.social__caption');

function renderBigPhotoModal(publications) {
  containerUsersPicture.addEventListener('click', (evt) => {
    const {url, likes, comments, description} = publications[photoNumber - 1];
    if (evt.target.className === 'picture__img') {
      bigPictureImg.src = url;
      likesCount.innerText = likes;
      commentsCount.innerText = comments.length;
      socialCaption.innerText = description;
      const commentFragment = document.createDocumentFragment();
      comments.forEach(({avatar, message}) => {
        const socialCommentElement = socialComment.cloneNode(true);
        const socialPicture = socialCommentElement.querySelector('.social__picture');
        const socialText = socialCommentElement.querySelector('.social__text');
        socialPicture.src = avatar;
        socialText.innerText = message;
        commentFragment.append(socialCommentElement);
      });
      socialComments.innerHTML = '';
      socialComments.append(commentFragment);
    }
  });
}

export {renderBigPhotoModal};
