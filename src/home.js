import header from "./homeScripts/header.js";
import content from "./homeScripts/content.js";
import footer from "./homeScripts/footer.js";
import './style/style.css';

async function initApp() {
    const app = document.querySelector('#app');
    app.append(
        header(),
        await content(),
        footer()
    );
}

initApp().catch(console.error);