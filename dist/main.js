/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

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

const renderBreaches = (parentId) => {
    fetch(HIBP_API + '/breaches')
        .then(response => response.json())
        .then(data => createArticles(parentId, data))
}

const renderMain = (placeholder) => {
    const $main = document.getElementById('main');
    $main.innerHTML = '';
    createSearchBar($main, placeholder);
    renderBreaches($main);
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


/***/ })

/******/ });
//# sourceMappingURL=main.js.map