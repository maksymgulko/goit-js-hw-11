import imageFetch from './js/pixabay-api';
import renderImages from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loader = document.querySelector('.loader');
const submitForm = document.querySelector('.form');

submitForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const searchResult = form.elements.picture.value.trim();
  loader.style.display = 'inline-block';
  imageFetch(searchResult).then(response => {
    if (response.hits.length > 0) {
      renderImages(response);
      loader.style.display = 'none';
    } else {
      iziToast.show({
        message: `❌ Sorry, there are no images matching your search query.`,
        position: 'topRight',
        backgroundColor: '#F44336',
        messageColor: '#fff',
      });
    }
  });
  lightbox.refresh(); //я, відверто кажучи, не впевнений, де ставити рефреш, щоб анімація завантаження показувалася або я неправильно щось роблю з анімацією
}
