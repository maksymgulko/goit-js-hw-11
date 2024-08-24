import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function renderImages(images) {
  const gallery = document.querySelector('.image-gallery');
  gallery.innerHTML = '';

  if (images.hits.length > 0) {
    const markup = images.hits
      .map(image => {
        const {
          webformatURL,
          largeImageURL,
          tags,
          views,
          downloads,
          likes,
          comments,
        } = image;
        return `
          <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img 
                class="gallery-image" 
                src="${webformatURL}"
                alt="${tags}"
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
}
