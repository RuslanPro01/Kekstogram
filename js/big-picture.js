import {publications} from './miniature-picture.js';

const bigPicture = document.querySelector('.big-picture');
//bigPicture.classList.remove('hidden');

const bigPictureFragment = document.createDocumentFragment();

publications.forEach(({url, likes, comments, description}) => {
  const bigPictureElement = bigPicture.cloneNode(true);
  bigPictureElement.querySelector('.big-picture__img').setAttribute('src', url);
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments.length;
  bigPictureElement.querySelector('.social__caption').innerText = description;

  comments.forEach(({avatar, message, name}) => {
    const socialComments = bigPictureElement.querySelector('.social__comments');
    //socialComments.innerHTML = '';
    const socialCommentElement = socialComments.querySelector('.social__comment:nth-child(1)');
    const socialCommentPicture = socialCommentElement.querySelector('.social__picture');
    socialCommentPicture.setAttribute('src', avatar);
    socialCommentPicture.setAttribute('alt', name);
    socialCommentElement.querySelector('.social__text').innerText = message;
  });
  bigPictureFragment.append(bigPictureElement);
});

