// AUTO-TYPE-CDN-CUSTOMIZATION 
let autotype = new Typed(".auto-type", {
    strings: ["WEB-DEVELOPER","BOOK-WORM", "WEB-DESIGNER", "VIDEO-EDITOR"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});

// CAROUSEL - SLIDER 
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})