import newsify_logo from '/images/newsify_logo1.png'

export default function main() {
    let mainElm = document.createElement("main")

    mainElm.innerHTML = `
        <div class="fullw center flex-column margin-top-large">
            <figure class="authlogo">
                <img class="authlogo__img" src="${newsify_logo}" alt="">
            </figure>
            <h1 class="">Newsify</h1>
            <p class="margin-top-large">Welcome! Let's dive into your account!</p>
        </div>
        <div>
            <button class="margin-top-medium btn btn__tweak">Continue with Facebook</button>
            <button class="margin-top-small btn btn__tweak">Continue with Google</button>
        </div>
        <div>
            <div class="border border-space margin-top-medium">
                <p class="center p-border">or</p>
            </div>
            <button class="margin-top-medium btn btn-home">Sign in with password</button>
            <p class="margin-top-large center">Don't have an account?  <a href="">Sign up</a></p>
        </div>
    `
    const btns = mainElm.querySelectorAll('.btn-home');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = '/home.html';
        });
    });

    return mainElm;
}