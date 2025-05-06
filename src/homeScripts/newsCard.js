export default function newsCard(article) {
  const card = document.createElement("article");
  card.className = "news-card";

  card.innerHTML = `
      <div class="news-card__wrapper">
          ${article.image ? `
              <figure class="news-card__image-container">
                  <img src="${article.image}" alt="${article.title}" class="news-card__image">
              </figure>
          ` : ''}
          <div class="news-card__text-content">
              <h3 class="news-card__title">
                  <a href="${article.url}" target="_blank" rel="noopener noreferrer">
                      ${article.title}
                  </a>
              </h3>
              <p class="news-card__text">${article.abstract || 'No description available'}</p>
          </div>
      </div>
  `;

  return card;
}