import onboardingSlide from './onboardingslide.js';

export default function main() {
    const mainElm = document.createElement('main');
    mainElm.className = 'onboarding-container';
    
    const slidesContainer = document.createElement('div');
    slidesContainer.className = 'slides-container';
    
    // Add slides
    const slides = [
        {
            image: '/images/OnboardingIphone1.png',
            title: 'Stay Connected, Everywhere, Anytime',
            text: 'Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.'
        },
        {
            image: '/images/OnboardingIphone2.png',
            title: 'Become a Savvy Global Citizen.',
            text: 'Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!'
        },
        {
            image: '/images/OnboardingIphone3.png',
            title: 'Enhance Your News Experience Now',
            text: 'Be part of our dynamic community and contribute your insights and participate in enriching conversations.'
        }
    ];

    // Create slides
    slides.forEach((slide, index) => {
        slidesContainer.appendChild(
            onboardingSlide(slide.image, slide.title, slide.text, index === 0)
        );
    });

    // Create dots indicator
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots-container';

    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dotsContainer.appendChild(dot);
    });

    mainElm.appendChild(slidesContainer);
    mainElm.appendChild(dotsContainer);

    return mainElm;
}

