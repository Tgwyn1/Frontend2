


const Menubuttons = document.querySelectorAll('#McLaren-Anchor,#Maserati-Anchor,#Aston-Anchor');
const learnMores = document.querySelectorAll('.Learn-more');
const wrapper = document.getElementById("Aston-Martin","Maserati");
const imageA = document.querySelector(".vehicle-Image-1");
const imageB = document.querySelector(".vehicle-Image-2");
const imageC = document.querySelector(".vehicle-Image-3");
const learnMore = document.querySelector(".Learn-more");
let mybutton = document.getElementById("scrollBtn");



/*---------------------JS Opacity----------------------------*/

/* Menu scroll Js*/
Menubuttons.forEach(button => {
  button.addEventListener('click', () => { /* listen for click */
    
    const targetId = button.getAttribute('data-target'); 
    const viewSection = document.getElementById(targetId);

    if (viewSection) {
      viewSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
/*---------------------JS Opacity----------------------------*/



/* ----------------------------Back to top button JS-------------------------------------*/

// 2. Listen for the click then trigger the top function 
mybutton.addEventListener("click", topFunction);

// 3. Watch the window scroll then run the scroll function
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 1400|| document.documentElement.scrollTop > 1400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  // Bonus: Smooth scrolling instead of an instant jump
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/* ----------------------------Back to top button JS-------------------------------------*/

/* ---- Slide Arrows----------------------------------------------------------------------*/

let slideIndex = 1;
showSlides(slideIndex);

// Select arrows
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");

function addSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    // Select BOTH slide groups
    let slides = document.querySelectorAll(".Fullslide-1, .Fullslide-2");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => slide.style.display = "none");

    // Restore your grid layout
    slides[slideIndex - 1].style.display = "grid";
}

/* ---- Slide Arrows----------------------------------------------------------------------*/
var infoText = document.querySelector('.inner-section-car-text');

ScrollReveal().reveal('.section-header');





document.addEventListener("DOMContentLoaded", function showLightbox () {
    const images = document.querySelectorAll('.videolightbox, .lightbox');

    images.forEach(function (image) {
        const wrapper = document.createElement('a');
        wrapper.setAttribute('data-no-swup', '');
        wrapper.setAttribute('data-fslightbox', 'gallery');
        wrapper.setAttribute('href', image.src);
        wrapper.setAttribute('aria-label', 'Click for Lightbox');

        image.parentNode.insertBefore(wrapper, image);
        wrapper.appendChild(image);
    });

    refreshFsLightbox();
});


/*--------------------Text Hover fuel the fire--------------------------------------*/













 




/*let carVid = document.getElementsByClassName("car-description");
let awayButton = document.getElementsByClassName("Learn-more");

for (let x = 0; x < carVid.length; x++) {
    carVid[x].innerHTML = "JavaScript changed this text!";
    carVid[x].style.color = "#ff0000";        
    carVid[x].classList.add("true"); /* activated class change*/ 
/*
console.log(awayButton);
for (let y = 0; y < awayButton.length; y++) {
    
    awayButton[y].style.display = "none";
}




let divEl = document.querySelectorAll(".one")

var logDiv = function(){
    divEl[4].style.backgroundColor="brown"
}
divEl = addEventListener("click", logDiv)*/
