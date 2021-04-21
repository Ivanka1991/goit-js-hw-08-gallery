import galleryItems from "./gallery-items.js"
/* console.log(galleryItems); */
/* Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне. 
Разбей задание на несколько подзадач:
1.Создание и рендер разметки по массиву данных и предоставленному шаблону.
2.Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
3.Открытие модального окна по клику на элементе галереи.
4.Подмена значения атрибута src элемента img.lightbox__image.
5.Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
6.Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,
чтобы при следующем открытии модального окна, 
пока грузится изображение, мы не видели предыдущее.
Разметка элемента галереи
Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, 
и указываться в href ссылки (это необходимо для доступности).


Закрытие модального окна по клику на div.lightbox__overlay.
Закрытие модального окна по нажатию клавиши ESC.
Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо". */

const refs={
 gallery: document.querySelector('.js-gallery'),
 image: document.createElement('img'),
 lightbox: document.querySelector('.lightbox'),
 btn: document.querySelector('button[data-action="close-lightbox"]'),
 lightboxImg: document.querySelector('.lightbox__image'),
 }
 
const galleryImg = ({ preview, original, description }) =>
`<li class="gallery__item">
<a
class="gallery__link"
href=${original}
>
<img
  class="gallery__image"
  src=${preview}
  data-source=${original}
  alt=${description}
/>
</a>
</li>`;

const galleryMarkup = galleryItems.reduce(
  (acc, item) => acc + galleryImg(item),
  ""
);

refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
refs.image.classList.add("gallery__image");

refs.gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event){
event.preventDefault();
if (event.target.nodeName !== 'IMG') {
  return;}
if(event.target.nodeName === 'IMG'){
  refs.lightbox.classList.add('is-open');
  refs.lightboxImg.src = event.target.getAttribute("data-source");
  refs.lightboxImg.alt = event.target.alt;
}

};
refs.btn.addEventListener('click', onCloseBtnClick);

function onCloseBtnClick(event) {
  event.preventDefault();
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImg.src = '';
  refs.lightboxImg.alt = '';
  
};




