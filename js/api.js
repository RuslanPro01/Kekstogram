import {renderBigPhotoModal} from './render-big-photo-modal.js';
import {showAlert} from './util.js';
import {getPublications} from './filter.js';

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      response.json()
        .then((data) => {
          //renderPublications(data);
          getPublications(data);
          renderBigPhotoModal(data);
        });
    } else {
      showAlert('Загрузить фоточки не получилось &#128532; Попробуй ещё &#128579;');
    }
  })
  .catch(() => {
    showAlert('Что-то не так с сетью &#128532 Попробуй обновить страницу &#128579;');
  });

const sendForm = (formData, onSuccess, fail) => {
  fetch('https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        fail();
      }
    })
    .catch(() => {
      fail();
    });
};

export {sendForm};
