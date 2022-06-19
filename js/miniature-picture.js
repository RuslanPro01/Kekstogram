const containerUsersPicture = document.querySelector('.pictures.container');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPublications = (publications) => {
  const pictureListFragment = document.createDocumentFragment();
  let i = 1;
  publications.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').setAttribute('src', url);
    pictureElement.querySelector('.picture__img').setAttribute('data-photo-number', `${i++}`);
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureListFragment.append(pictureElement);
  });
  containerUsersPicture.append(pictureListFragment);
};

export {containerUsersPicture, renderPublications};
