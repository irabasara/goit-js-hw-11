export default function smoothScrollGallery(el) {
  window.scroll({
    top: el.offsetTop,
    behavior: 'smooth',
  });
}

export default function upButtonVisible() {
  refs.fastScrollUp.hidden = false;
  setTimeout(() => {
    refs.fastScrollUp.hidden = true;
  }, 5000);

  refs.fastScrollUp.addEventListener('click', () => {
    smoothScrollGallery(refs.searchForm);
  });
}
