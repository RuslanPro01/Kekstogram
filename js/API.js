import {renderPublications} from './miniature-picture.js';

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    renderPublications(data);
  });
