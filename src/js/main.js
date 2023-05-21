// import Image from './pixabayAPI';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { Report } from 'notiflix';

// const buttonLoadMore = document.querySelector('.load-more');
// const searchForm = document.querySelector('#search-form');
// // const searchButton = document.querySelector('button[type=submit]');
// const gallery = document.querySelector('.gallery');
// // buttonLoadMore.style.visibility = 'hidden';

// const image = new Image();
// const lightbox = new SimpleLightbox('.gallery a');

// searchForm.addEventListener('submit', onSearchFormSubmit);
// buttonLoadMore.addEventListener('click', onLoadMoreClick);

// function onSearchFormSubmit(event) {
//   event.preventDefault();
//   image.query = event.currentTarget.elements.searchQuery.value;

//   image.resetPage();
//   image
//     .fetchImages()
//     .then(({ hits }) => {
//       btnNothidden();

//       if (hits.length === 0 || image.query === '') {
//         return Report.info(
//           'INFO',
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//       }

//       gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
//     })
//     .catch(error => console.log(error));
//   lightbox.refresh();

//   clearMarkup();
// }
// function onLoadMoreClick() {
//   image
//     .fetchImages()
//     .then(({ hits, totalHits }) => {
//       btnNothidden();
//       if (image.perPage >= totalHits) {
//         return Report.info(
//           'INFO',
//           "We're sorry, but you've reached the end of search results."
//         );
//       }

//       gallery.insertAdjacentHTML('beforeend', createMarkup(hits));

//       image.incrementHits(hits);
//     })
//     .catch(error => console.log(error));
//   btnNothidden();
//   lightbox.refresh();
// }

// function clearMarkup() {
//   gallery.innerHTML = '';
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => {
//         return `
//     <div class="photo-card">
//   <a href='${largeImageURL}' class="gallery__link"><img src="${webformatURL}" alt="${tags}" loading="lazy" width=300 height=200/></a>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>${likes}
//     </p>
//     <p class="info-item">
//       <b>Views</b>${views}
//     </p>
//     <p class="info-item">
//       <b>Comments</b>${comments}
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>${downloads}
//     </p>
//   </div>
// </div>`;
//       }
//     )
//     .join('');
// }

// function btnNothidden() {
//   buttonLoadMore.style.visibility = 'visible';
// }

// function btnIshidden() {
//   buttonLoadMore.style.visibility = 'hidden';
// }
// btnIshidden();

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        console.log('this messege ');
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === potionName) {
        console.log('find this:', potionName);
        console.log([i]);
        potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (oldName === potions[i].name) {
        potions[i].name = newName;
      }
    }
  },
  // Change code above this line
};
atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
console.log(atTheOldToad.potions);
