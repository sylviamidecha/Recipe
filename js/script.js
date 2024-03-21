document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        showSlide(currentSlideIndex);
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    }

    // Call nextSlide to start the slideshow
    nextSlide();

    // Automatically transition to the next slide every 3 seconds
    setInterval(nextSlide, 3000);
});