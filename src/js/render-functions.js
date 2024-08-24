import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default function renderImages(images) {
  const gallery = document.querySelector('.image-gallery');
  gallery.innerHTML = '';
  const lightbox = new SimpleLightbox('.gallery-link', {
    captionsData: 'alt',
    captionDelay: 250,
  });

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
            <div class="overlay">
            <div class="info">
                <div class="overlay-item">Likes<br>${likes}</div>
                <div class="overlay-item">Views<br>${views}</div>
                <div class="overlay-item">Comments<br>${comments}</div>
                <div class="overlay-item">Downloads<br>${downloads}</div>
                </div>
            </div>
          </li>`;
      })
      .join('');

    gallery.innerHTML = markup;

    lightbox.refresh();
  } else {
    iziToast.show({
      message: `❌ Sorry, there are no images matching your search query.`,
      position: 'topRight',
      backgroundColor: '#F44336',
      messageColor: '#fff',
    });
  }
}
