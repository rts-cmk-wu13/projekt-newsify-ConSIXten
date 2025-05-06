export const fetchNews = async () => {
    try {
        const API_KEY = 'mb968k6JXl8uZck3uzfrRTgO98WkKZlR';
        // First fetch the sections list
        const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Take only first 20 sections
        const sections = data.results.slice(0, 20).reduce((acc, section) => {
            acc[section.display_name] = []; // Initialize empty array for each section
            return acc;
        }, {});

        // Now fetch articles for each section
        await Promise.all(Object.keys(sections).map(async (sectionName) => {
            try {
                const sectionResponse = await fetch(
                    `https://api.nytimes.com/svc/news/v3/content/all/${sectionName.toLowerCase().replace(/\s+/g, '')}.json?api-key=${API_KEY}`
                );
                if (sectionResponse.ok) {
                    const sectionData = await sectionResponse.json();
                    sections[sectionName] = sectionData.results
                        .filter(article => article.title && article.abstract) // Only include articles with title and abstract
                        .slice(0, 5) // Take only first 5 articles
                        .map(article => ({
                            title: article.title,
                            abstract: article.abstract || 'No description available',
                            url: article.url,
                            image: article.multimedia?.[2]?.url || null, // Using index 2 for medium-sized image
                            publishedDate: article.published_date
                        }));
                }
            } catch (error) {
                console.error(`Error fetching articles for ${sectionName}:`, error);
                sections[sectionName] = []; // Set empty array if fetch fails
            }
        }));

        // Remove sections with no articles
        return Object.fromEntries(
            Object.entries(sections).filter(([_, articles]) => articles.length > 0)
        );

    } catch (error) {
        console.error('Error fetching news:', error);
        return {};
    }
};