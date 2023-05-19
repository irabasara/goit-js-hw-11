import Image from './pixabayAPI';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const buttonLoadMore = document.querySelector('.load-more');
const searchForm = document.querySelector('#search-form');
const searchButton = document.querySelector('button[type=submit]');
const gallery = document.querySelector('.gallery');

const image = new Image();
const lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', onSearchFormSubmit);
buttonLoadMore.addEventListener('click', onLoadMoreClick);

function onSearchFormSubmit(event) {
  event.preventDefault();
  image.query = event.currentTarget.elements.searchQuery.value;

  if (image.query === '') {
    return window.alert('ddtlbnt ;lugycgjvhkbj');
  }
  image.resetPage();
  image
    .fetchImages()
    .then(({ hits }) => {
      gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
    })
    .catch(error => console.log(error));
  clearMarkup();
}
function onLoadMoreClick() {
  imagesApiService
    .fetchImages()
    .then(({ hits }) => {
      gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
    })
    .catch(error => console.log(error));
}

function clearMarkup() {
  gallery.innerHTML = '';
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
    <div class="photo-card">
  <a href='${largeImageURL}' class="gallery__link"><img src="${webformatURL}" alt="${tags}" loading="lazy" width=300 height=200/></a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${likes}
    </p>
    <p class="info-item">
      <b>Views</b>${views}
    </p>
    <p class="info-item">
      <b>Comments</b>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${downloads}
    </p>
  </div>
</div>`;
      }
    )
    .join('');
}
