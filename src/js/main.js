import axios from 'axios';

const buttonLoadMore = document.querySelector('.load-more');
const searchForm = document.querySelector('#search-form');
const searchButton = document.querySelector('button[type=submit]');
const gallery = document.querySelector('.gallery');
console.log(searchButton);

searchForm.addEventListener('submit', onSearchFormSubmit);

async function onSearchFormSubmit(event) {
  event.preventDefault();
  const name = event.currentTarget.elements.searchQuery.value;
  await axios
    .get(
      `https://pixabay.com/api/?key=36518003-e50cc2d75c5794a64cca810ae&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(resp => {
      gallery.innerHTML = createMarkup(resp.data.hits);
    })
    .catch(error => console.log(error));
}

function createMarkup(arr) {
  return arr.map(
    ({
      webformatURL,
      // largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      return `
    <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" width=300 height=200/>
  <div class="info">
    <p class="info-item">
      <b>Likes : </b>${likes}
    </p>
    <p class="info-item">
      <b>Views : </b>${views}
    </p>
    <p class="info-item">
      <b>Comments : </b>${comments}
    </p>
    <p class="info-item">
      <b>Downloads : </b>${downloads}
    </p>
  </div>
</div>`;
    }
  );
}
