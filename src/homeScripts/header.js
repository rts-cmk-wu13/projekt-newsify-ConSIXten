
export default function header(){
    let headerElm = document.createElement('header');
    headerElm.innerHTML = `
    <nav class="flex-row center margin-top-small margin-bottom-small">
        <figure class="logo__home">
            <img class="authlogo__img" src="/public/images/newsify_logo1.png" alt="">
        </figure>
        <p class="logo__text">Newsify</p>
    </nav>
    <input class="margin-bottom-small input" type="search" name="" id="" placeholder="Search news">
    `; 
    return headerElm;
}
