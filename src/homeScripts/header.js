import newsify_logo from '/images/newsify_logo1.png'

export default function header() {
    let headerElm = document.createElement('header');
    headerElm.innerHTML = `
    <nav class="flex-row center margin-top-small margin-bottom-small">
        <figure class="logo__home">
            <img src="${newsify_logo}" class="authlogo__img" alt="">
        </figure>
        <p class="logo__text">Newsify</p>
    </nav>
    <input class="margin-bottom-small input" type="search" name="" id="" placeholder="Search news">
    `;
    return headerElm;
}
