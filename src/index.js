// https://haveibeenpwned.com/api/v2/breaches
// https://haveibeenpwned.com/api/v2/breachedaccount/{account}
// https://haveibeenpwned.com/api/v2/breach/{name}
const HIBP_API = 'https://haveibeenpwned.com/api/v2';

const createNavbar = () => {
    const $nav = document.getElementById('nav');
    $nav.innerHTML = `
        <button id="breaches-btn" class="btn">Breaches</button>
        <button id="accounts-btn" class="btn">Accounts</button>`;
    
    const $BreachesBtn = document.getElementById('breaches-btn');
    const $AccountsBtn = document.getElementById('accounts-btn');
    
    $nav.addEventListener('click', (event) => {
        if (event.target && event.target.id === 'breaches-btn') {
            $BreachesBtn.classList.add('selected');
            $AccountsBtn.classList.remove('selected');
            render('breaches');
        }
        if (event.target && event.target.id === 'accounts-btn') {
            $BreachesBtn.classList.remove('selected');
            $AccountsBtn.classList.add('selected');
            render('accounts');
        }
    });
}
    
const createSearchBar = (parent, placeholder) => {
    const $searchBar = document.createElement('div');
    $searchBar.setAttribute('id', 'searchBar');
    $searchBar.innerHTML = `
        <input id="searchInput" class="search-input" type="search" placeholder=${placeholder}>
        <button id="searchBtn" class="search-btn">Search</button>`;

    $searchBar.addEventListener('click', (event) => {
        if (event.target && event.target.id === 'searchBtn') {
            const breach = document.getElementById('searchInput').value;
            render('details', breach);
        }
    });

    parent.appendChild($searchBar);
}

const createArticles = (parent, breaches) => {
    const $articles = document.createElement('div');
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
                    <button id="info" name="${breach.Name}">i</button>
                </div>
            </article>`;
        $article.addEventListener('click', (event) => {
            if (event.target && event.target.id === 'info') {
                render('details', event.target.name);
            }
        })
        $articles.appendChild($article);
    });
    parent.appendChild($articles);
}

const renderAllBreaches = (parentId) => {
    fetch(HIBP_API + '/breaches')
        .then(response => response.json())
        .then(data => createArticles(parentId, data))
}

const renderMain = (placeholder) => {
    const $main = document.getElementById('main');
    $main.innerHTML = '';
    createSearchBar($main, placeholder);
    renderAllBreaches($main);
}

const renderDetails = (breachName) => {
    fetch(HIBP_API + '/breach/' + breachName)
        .then(response => response.json())
        .then(breach => {
            const $main = document.getElementById('main');
            $main.innerHTML = `
                <div class="details-path">
                    <button class="details-path-btn">Accounts</button> /
                    <button class="details-path-btn">${breach.Name}</button>
                </div>
                <div class="details-header">
                    <p>${breach.Name}</p>
                    <img src="${breach.LogoPath}">
                </div>
                <div class="details-info">
                    <p>${breach.Description}</p>
                    <p><strong>Breach date:</strong> ${breach.BreachDate}</p>
                    <p><strong>Date added th HIBP:</strong> ${breach.AddedDate}</p>
                    <p><strong>Compromised accounts:</strong> ${breach.PwnCount}</p>
                    <p><strong>Compromised data:</strong> ${breach.DataClasses}</p>
                </div>`;
        })
}

const render = (route, breachName) => {
    switch(route) {
        case 'breaches':
            renderMain('SearchBreaches...');
            break;
        case 'accounts':
            renderMain('SearchAccounts...');
            break;
        case 'details':
            renderDetails(breachName);
            break;
        default:
            console.log('default switch');
    }
}

createNavbar();
render('breaches');
