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

    
    nextSlide();

   
    setInterval(nextSlide, 3000);
});