const createNavbar = () => {
    const $navbar = document.getElementById('navigation');
    $navbar.innerHTML = `
        <button id="breaches-btn" class="btn">Breaches</button>
        <button id="accounts-btn" class="btn">Accounts</button>`;
}

const createSearchBar = (placeholder) => {
    const $searchBar = document.getElementById('searchBar');
    $searchBar.innerHTML = `
        <input id="searchInput" class="search-input" type="search" placeholder=${placeholder}>
        <button id="searchBtn" class="search-btn">Search</button>`;
}

const addNavbarListeners = () => {
    const $BreachesBtn = document.getElementById('breaches-btn');
    const $AccountsBtn = document.getElementById('accounts-btn');

    $BreachesBtn.addEventListener('click', () => {
        $BreachesBtn.classList.add('selected');
        $AccountsBtn.classList.remove('selected');
    });
    
    $AccountsBtn.addEventListener('click', () => {
        $BreachesBtn.classList.remove('selected');
        $AccountsBtn.classList.add('selected');
    });
}

createNavbar();
addNavbarListeners();
createSearchBar('Site name...');

const createArticles = (breaches) => {
    const $articles = document.getElementById('articles');
    $articles.innerHTML = '';
    breaches.forEach(breach => {
        const $article = document.createElement('article');
        $article.innerHTML = `
            <article class="article">
                <div class="article-img">
                    <img src="${breach.LogoPath}">
                </div>
                <div class="article-text">
                    <h3>${breach.Name}</h3>
                    <p>Breached date: ${breach.BreachDate}</p>
                </div>
                <div class="article-btn">
                    <button>i</button>
                </div>
            </article>`;
        $articles.appendChild($article);
    });
}

const getBreaches = async () => {
    const data = await fetch('https://haveibeenpwned.com/api/v2/breaches');
    return data.json();
};

const breachesData = getBreaches();
Promise.resolve(breachesData).then((breaches) => {
    createArticles(breaches);
});
