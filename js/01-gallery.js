import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const div = document.querySelector(`.gallery`);


const crEl = galleryItems.map(galleryItem => 
`<div class="gallery__item">
<a class="gallery__link"  href="${galleryItem.original}"  >
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt="${galleryItem.description}"
  />
</a>
</div>`

).join(" ");
div.insertAdjacentHTML('afterbegin', crEl)