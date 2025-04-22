export default function main () {
    let mainElm = document.createElement("main")

    mainElm.innerHTML = `
    <div class="center flex-column landing">
        <figure class="logo">
            <img class="logo__img" src="./src/assets/images/newsify_logo1.png" alt="">
        </figure>
        <h1 class="center ">Newsify</h1>
    </div>
`

return mainElm
}