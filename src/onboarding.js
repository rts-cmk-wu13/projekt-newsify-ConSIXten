import content from "./onboardingScripts/content.js";
import './style/style.css';

document.querySelector('#app').append(content());

document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.onboarding-slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.zIndex = '0';
        });
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        slides[index].style.zIndex = '1';
        dots[index].classList.add('active');
    }

    // Handle touch events
    let touchStartX = 0;
    let isSwiping = false;

    document.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        isSwiping = true;
    });

    document.addEventListener('touchend', e => {
        if (!isSwiping) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentSlide < slides.length - 1) {
                currentSlide++;
            } else if (diff < 0 && currentSlide > 0) {
                currentSlide--;
            }
            showSlide(currentSlide);
        }
        isSwiping = false;
    });
});