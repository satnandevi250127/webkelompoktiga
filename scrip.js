let currentSlide = 0;
const slider = document.getElementById('slider');
const totalSlides = slider.children.length;

function autoSlide() {
    currentSlide++;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}


setInterval(autoSlide, 1000);
