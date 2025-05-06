export default function onboardingSlide(imagePath, title, text, isActive = false) {
    const slide = document.createElement('div');
    slide.className = `onboarding-slide ${isActive ? 'active' : ''}`;

    slide.innerHTML = `
        <div class="onboarding__backdrop">
            <figure class="onboarding__backdrop__figure">
                <img src="${imagePath}" alt="Onboarding step">
            </figure>
            <div class="onboarding__content">
                <h2>${title}</h2>
                <p>${text}</p>
                <div>
                    <button class="btn-login btn btn__tweak">Log In</button>
                    <button class="btn-login btn">Sign up</button>
                </div>
            </div>
        </div>
    `;

    const buttons = slide.querySelectorAll('.btn-login');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = '/login.html';
        });
    });

    return slide;
}

