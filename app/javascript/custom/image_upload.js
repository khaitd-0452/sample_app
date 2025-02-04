import {t} from '../loadTranslations'
document.addEventListener('turbo:load', function() {
  let image_upload = document.querySelector('#micropost_image');
  if (image_upload) {
    image_upload.addEventListener('change', function(event) {
      if (image_upload.files.length > 0) {
        const size_in_megabytes = image_upload.files[0].size / 1024 / 1024;
        if (size_in_megabytes > 5) {
          alert(t('alert.upload.image_size'))
          image_upload.value = '';
        }
      }
    });
  }
});
