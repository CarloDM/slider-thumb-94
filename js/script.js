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
  
  // creo un nuovo tag img come -> document.createElement('img')
  const thumb = new Image();
  thumb.src = `img/0${i}.jpg`;
  thumb.className = 'item-thumb';
  // aggiungo alla thumb l'id dell'immagine con una proprità custom
  thumb.thumbId = i - 1;
  // come funzione di callback utilizzo una mia funzione esterna
  // che riceve this internamente
  thumb.addEventListener('click',clickThumb)
  thumbs.append(thumb);
}

// inserisco le immagini e le thumb nei contenitori
slider.innerHTML = imagesHtml;

// prendo l'elenco delle immagini e delle thumbs
const imagesList = document.getElementsByClassName('item');
const thumbsList = document.getElementsByClassName('item-thumb');

// rendo attiva la prima immagine e la prima thumb
imagesList[counterImages].classList.add('active');
thumbsList[counterImages].classList.add('active');

prev.addEventListener('click', function(){
  nextPrev(true);
})

next.addEventListener('click', function(){
  nextPrev(false);
})

function clickThumb(){
  removeActive();
  //  con this ottengo l'elemento cliccato
  console.log(this)
  // assegno il mio valore custom thumbId alla variabile globale counterImages
  counterImages = this.thumbId
  addActive()
}

function nextPrev(isNext){
  removeActive();
  if(isNext){
    counterImages++;
    if(counterImages === numImages) counterImages = 0;
  }else{
    counterImages--;
    if(counterImages < 0) counterImages = numImages - 1;
  }
  addActive()
}

function removeActive(){
  imagesList[counterImages].classList.remove('active');
  thumbsList[counterImages].classList.remove('active');
}

function addActive(){
  imagesList[counterImages].classList.add('active');
  thumbsList[counterImages].classList.add('active');
}

//// AUTOPLAY
let isMouseOver = false

// ogni 2 secondi lancio next solo se il mouse non è sopra lo slider
setInterval(function(){
  if(!isMouseOver) nextPrev(true)
},2000)

// col mouse è sullo slider salvo il dato nel flag
slider.addEventListener('mouseenter', () => isMouseOver = true)

// col mouse fuori dallo slider salvo il dato nel flag
slider.addEventListener('mouseleave', () => isMouseOver = false)