import {imgFilters} from './post-filtering.js';

const containerUsersPicture = document.querySelector('.pictures.container');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPublications = (publications) => {
  const userPublications = containerUsersPicture.querySelectorAll('.picture');
  userPublications.forEach((publication) => {
    publication.remove();
  });
  const pictureListFragment = document.createDocumentFragment();
  publications.forEach(({id, url, likes, comments}) => {
    imgFilters.classList.remove('img-filters--inactive');
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').setAttribute('src', url);
    pictureElement.querySelector('.picture__img').setAttribute('data-photo-number', `${id + 1}`);
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureListFragment.append(pictureElement);
  });
  containerUsersPicture.append(pictureListFragment);
};

export {containerUsersPicture, renderPublications};
