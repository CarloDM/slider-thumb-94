// HTML ELEMENTS
const slider = document.querySelector('.images-wrapper');
const thumbs = document.querySelector('.thumbs');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');


const numImages = 5;
let counterImages = 0;
let  imagesHtml = '';
let  thumbsHtml = '';

for(let i = 1; i <= numImages; i++){
  imagesHtml += `<img class="item" src="img/0${i}.jpg" alt="">`;
  thumbsHtml += `<img class="item-thumb" src="img/0${i}.jpg" alt="">`;
}

// inserisco le immagini e le thumb nei contenitori
slider.innerHTML = imagesHtml;
thumbs.innerHTML = thumbsHtml;

// prendo l'elenco delle immagini e delle thumbs
const imagesList = document.getElementsByClassName('item');
const thumbsList = document.getElementsByClassName('item-thumb');

// rendo attiva la prima immagine e la prima thumb
imagesList[counterImages].classList.add('active');
thumbsList[counterImages].classList.add('active');

prev.addEventListener('click', function(){
  imagesList[counterImages].classList.remove('active');
  thumbsList[counterImages].classList.remove('active');
  counterImages++;
  
  // se il contatore raggiunge il limite lo resetto
  if(counterImages === numImages) counterImages = 0;

  imagesList[counterImages].classList.add('active');
  thumbsList[counterImages].classList.add('active');
})

next.addEventListener('click', function(){
  imagesList[counterImages].classList.remove('active');
  thumbsList[counterImages].classList.remove('active');
  counterImages--;

  // se il contatore è < 0 lo faccio puntare all'ultima immagine
  if(counterImages < 0) counterImages = numImages - 1;
  imagesList[counterImages].classList.add('active');
  thumbsList[counterImages].classList.add('active');
})