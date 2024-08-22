import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function handleSubmit(event) {
  const key = '45559560-5df08bb83c1629c82dd907879';
  event.preventDefault();
  const form = event.target;
  const searchResult = form.elements.picture.value.trim();
  const url =
    'https://pixabay.com/api/?key=' +
    key +
    '&q=' +
    encodeURIComponent(searchResult);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      const gallery = document.querySelector('.image-gallery');
      gallery.innerHTML = '';

      if (images.hits.length > 0) {
        const markup = images.hits
          .map(image => {
            const { webformatURL, largeImageURL, tags } = image;
            return `
              <li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                  <img 
                    class="gallery-image" 
                    src="${webformatURL}"
                    alt="${tags}"
                    width="300px"
                  />
                </a>
              </li>`;
          })
          .join('');

        gallery.innerHTML = markup;

        new SimpleLightbox('.gallery-link', {
          captionsData: 'alt',
          captionDelay: 250,
        });
      } else {
        gallery.innerHTML = '<p>No images found.</p>';
      }
    })
    .catch(error => console.log('Error:', error));
}
