import newsCard from "./newsCard.js";

export default function main() {
    let mainElm = document.createElement("main");

    // Fetch and populate news
    fetchNews().then(articlesBySection => {
        // Create dropdowns for each category found
        Object.keys(articlesBySection).forEach(category => {
            const dropdown = createCategoryDropdown(category, articlesBySection[category]);
            mainElm.appendChild(dropdown);
        });
    });

    return mainElm;
}

function createCategoryDropdown(category, articles) {
    const dropdown = document.createElement('section');
    dropdown.className = 'dropdown fullw';

    dropdown.innerHTML = `
        <div class="dropdown__header">
            <div class="dropdown__left">
                <figure class="dropdown__logo">
                    <img src="/public/images/newsify_logo1.png" class="dropdown__logo-img">
                </figure>
                <h2 class="dropdown__title">${category.toUpperCase()}</h2>
            </div>
            <span class="dropdown__arrow"><i class="fa-solid fa-arrow-up"></i></span>
        </div>
        <div class="dropdown__content hidden">
            <div class="dropdown__articles"></div>
        </div>
    `;

    // Add articles to dropdown
    const articlesContainer = dropdown.querySelector('.dropdown__articles');
    articles.forEach(article => {
        articlesContainer.appendChild(newsCard(article));
    });

    // Add click handler
    const header = dropdown.querySelector('.dropdown__header');
    header.addEventListener('click', () => {
        const content = dropdown.querySelector('.dropdown__content');
        content.classList.toggle('hidden');
        header.querySelector('.dropdown__arrow').classList.toggle('active');
    });

    return dropdown;
}

async function fetchNews() {
    try {
        const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=mb968k6JXl8uZck3uzfrRTgO98WkKZlR');
        const data = await response.json();

        // Group articles by section
        const articlesBySection = data.results.reduce((acc, article) => {
            if (!article.section) return acc;

            const section = article.section;
            if (!acc[section]) {
                acc[section] = [];
            }

            // Add only if we have required fields
            if (article.title && article.abstract) {
                acc[section].push({
                    title: article.title,
                    abstract: article.abstract,
                    url: article.url,
                    image: article.multimedia?.[0]?.url || null,
                    publishedDate: article.published_date
                });
            }

            return acc;
        }, {});

        return articlesBySection;

    } catch (error) {
        console.error('Error fetching news:', error);
        return {};
    }
}