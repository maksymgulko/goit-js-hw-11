export default function handleSubmit(event, renderImages) {
  event.preventDefault();
  const key = '45559560-5df08bb83c1629c82dd907879';
  const form = event.target;
  const searchResult = form.elements.picture.value.trim();
  const url =
    'https://pixabay.com/api/?key=' +
    key +
    '&q=' +
    encodeURIComponent(searchResult) +
    '&per_page=45';

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      renderImages(images);
    })
    .catch(error => console.log('Error:', error));
}
