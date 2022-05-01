import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ul =document.querySelector(`.gallery`);

const crEl = galleryItems.map(galleryItem => 
  `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`
  
  ).join(" ");
  ul.insertAdjacentHTML('afterbegin', crEl);
  
    const lightbox = new SimpleLightbox('.gallery a', { });
    console.log(lightbox)

  lightbox.options.captionsData =`alt`;
  lightbox.options.captionDelay =250
