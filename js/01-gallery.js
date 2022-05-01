import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const div = document.querySelector(`.gallery`);


const crEl = galleryItems.map(galleryItem => 
`<div class="gallery__item">
<a class="gallery__link"  href="${galleryItem.original}" target="_self" >
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt="${galleryItem.description}"
  />
</a>
</div>`

).join(" ");
div.insertAdjacentHTML('afterbegin', crEl);

const a = document.querySelector(`.gallery__link`)
const divCh = document.querySelector(`.gallery__item`)
const img = document.querySelector(`.gallery__image`)

div.addEventListener(`click`, (e)=> {
e.preventDefault();
const imgB = e.target.classList.contains(`gallery__image`)
if(!imgB){
  return
}

// const val = e.target;

// let closImg = val.closest(`.gallery__image`);
const val= e.target.dataset.source;
console.log(val);
const closImg = basicLightbox.create(`<img  src="${val}"/>` );
closImg.show()

})

