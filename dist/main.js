!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n;document.getElementById("navigation").innerHTML='\n        <button id="breaches-btn" class="btn">Breaches</button>\n        <button id="accounts-btn" class="btn">Accounts</button>',(()=>{const e=document.getElementById("breaches-btn"),t=document.getElementById("accounts-btn");e.addEventListener("click",()=>{e.classList.add("selected"),t.classList.remove("selected")}),t.addEventListener("click",()=>{e.classList.remove("selected"),t.classList.add("selected")})})(),n="Site name...",document.getElementById("searchBar").innerHTML=`\n        <input id="searchInput" class="search-input" type="search" placeholder=${n}>\n        <button id="searchBtn" class="search-btn">Search</button>`;const r=(async()=>{return(await fetch("https://haveibeenpwned.com/api/v2/breaches")).json()})();Promise.resolve(r).then(e=>{(e=>{const t=document.getElementById("articles");t.innerHTML="",e.forEach(e=>{const n=document.createElement("article");n.innerHTML=`\n            <article class="article">\n                <div class="article-img">\n                    <img src="${e.LogoPath}">\n                </div>\n                <div class="article-text">\n                    <h3>${e.Name}</h3>\n                    <p>Breached date: ${e.BreachDate}</p>\n                </div>\n                <div class="article-btn">\n                    <button>i</button>\n                </div>\n            </article>`,t.appendChild(n)})})(e)})}]);
//# sourceMappingURL=main.js.map