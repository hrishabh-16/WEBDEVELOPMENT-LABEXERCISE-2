// AUTO-TYPE-CDN-CUSTOMIZATION 
let autotype = new Typed(".auto-type", {
    strings: ["WEB-DEVELOPER","BOOK-WORM", "WEB-DESIGNER", "VIDEO-EDITOR"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});

// SCROLL-ANIMATION 
const scrolloffset = 200;
const scrollElement = document.querySelector(".js-scroll");

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
         elementTop <= ((
            window.innerHeight || document.documentElement.clientHeight ) - offset )
        );
};

const displayScrollElement = () => {
    scrollElement.classList.add('scrolled');
}

const hideScrollElement = () => {
    scrollElement.classList.remove('scrolled');
}

const handleScrollAnimation = () => {
    if (elementInView (scrollElement, scrolloffset)) {
        displayScrollElement();
    } else {
        hideScrollElement();
    }
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
})