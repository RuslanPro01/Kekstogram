import {renderPublications} from './miniature-picture.js';
import {createRandomArray} from './util.js';
import {debounce} from './util.js';

const imgFilters = document.querySelector('.img-filters');

const compareDiscussed = (publicationA, publicationB) => publicationB.comments.length - publicationA.comments.length;

let newData;
const updateData = (modifiedData) => {
  newData = modifiedData;
};

const getPublications = (data) => {
  renderPublications(data);
  function setDiscussedClick(cb) {
    imgFilters.addEventListener('click', (evt) => {
      if (evt.target.className === 'img-filters__button') {
        const filtersButtonActive = imgFilters.querySelector('.img-filters__button--active');
        filtersButtonActive.classList.remove('img-filters__button--active');
        evt.target.classList.add('img-filters__button--active');
      }
      if (evt.target.id === 'filter-discussed') {
        const publicationsCopy = data.slice();
        publicationsCopy.sort(compareDiscussed);
        updateData(publicationsCopy);
        cb(publicationsCopy);
      }
      if (evt.target.id === 'filter-default') {
        const publicationsCopy = data.slice();
        updateData(publicationsCopy);
        cb(publicationsCopy);
      }
      if (evt.target.id === 'filter-random') {
        const randomPostsNumbers = createRandomArray(data.length).slice(0, 10);
        const publicationsCopy = [];
        for (let i = 0; i < data.length; i++) {
          const matches = randomPostsNumbers.some((number) => data[i].id === number);
          if (matches) {
            publicationsCopy.push(data[i]);
          }
        }
        updateData(publicationsCopy);
        cb(publicationsCopy);
      }
    });
  }
  setDiscussedClick(debounce(() => renderPublications(newData), 500));
};

export {imgFilters, getPublications};
