import Image from './pixabayAPI';
import createMarkup from './markup';
import refs from './refs';
import upButtonVisible from './scroll';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Report } from 'notiflix';

const image = new Image();
const lightbox = new SimpleLightbox('.gallery a');

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();
  image.query = event.currentTarget.elements.searchQuery.value;
  image.resetPage();
  observer.unobserve(refs.target);

  image
    .fetchImages()
    .then(({ hits }) => {
      if (hits.length === 0 || image.query === '') {
        return Report.info(
          'INFO',
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

      refs.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
      observer.observe(refs.target);
      lightbox.refresh();
    })
    .catch(error => console.log(error));
  clearMarkup();
}

function clearMarkup() {
  refs.gallery.innerHTML = '';
}

let options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(onLoad, options);
function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      upButtonVisible();
      image
        .fetchImages()
        .then(({ hits, totalHits }) => {
          const maxImageOnPage = 480;
          if (image.perPage >= maxImageOnPage || image.perPage >= totalHits) {
            observer.unobserve(refs.target);
            upButtonVisible();
            return Report.info(
              'INFO',
              "We're sorry, but you've reached the end of search results."
            );
          }

          refs.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
          lightbox.refresh();

          image.incrementHits(hits);
        })
        .catch(error => console.log(error));
    }
  });
}
