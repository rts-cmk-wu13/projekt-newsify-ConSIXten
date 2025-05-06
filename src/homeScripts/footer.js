export default function footer() {
    let footerElm = document.createElement("footer")
    footerElm.innerHTML = `
    <nav>
        <ul class="footer__list flex-row space-between margin-top-medium">
            <li class="footer__item"><i class="fa-solid fa-house"></i></li>
            <li class="footer__item"><i class="fa-solid fa-bookmark"></i></li>
            <li class="footer__item"><i class="fa-solid fa-star"></i></li>
            <li class="footer__item"><i class="fa-solid fa-gear"></i></li>
        </ul>
    </nav>
`
    return footerElm
}