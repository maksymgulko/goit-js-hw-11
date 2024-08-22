import handleSubmit from './js/pixabay-api';

const submitForm = document.querySelector('.form');
const submitBtn = document.querySelector('.submit-btn');

submitForm.addEventListener('submit', handleSubmit);
