import {imgUploadPreviewInner} from './image-editing.js';
import {uploadFile} from './upload-form.js';
import {FILE_TYPES} from './constants.js';
import {showAlert} from './util.js';

uploadFile.addEventListener('change', () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imgUploadPreviewInner.src = URL.createObjectURL(file);
  } else {
    showAlert('Кажется выбрано не фото, держи кота и поробуй ещё');
  }
});
