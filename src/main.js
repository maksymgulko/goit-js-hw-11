import handleSubmit from './js/pixabay-api';
import renderImages from './js/render-functions';

const submitForm = document.querySelector('.form');
submitForm.addEventListener('submit', event =>
  handleSubmit(event, renderImages)
);
