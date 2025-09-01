const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
let index = 0;

function moveCarousel() {
    index = (index + 1) % cards.length;
    track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 7000);