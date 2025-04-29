export default function main() {
    let mainElm = document.createElement("main")

    mainElm.innerHTML = `
        <div class="center flex-column landing">
            <figure class="logo">
                <img class="logo__img" src="./public/images/newsify_logo1.png" alt="">
            </figure>
            <h1 class="center">Newsify</h1>
        </div>
    `

    const logo = mainElm.querySelector('.logo')
    let hasTransitioned = false

    logo.addEventListener('animationend', (event) => {
        // Only trigger on the growAndWiggle animation
        if (event.animationName !== 'growAndWiggle' || hasTransitioned) return
        hasTransitioned = true
        
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-out'
            document.body.style.opacity = '0'
            
            setTimeout(() => {
                window.location.href = 'src/onboardingScripts/onboarding.html'
            }, 500)
        }, 1000)
    })

    return mainElm
}