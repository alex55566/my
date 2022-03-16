import { linkArr } from './films-list.js';

import { linkBackArr } from './film-details.js';

const bootstrap = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css';

const cssPromises = {};

function loadResource(src) {
    // Javascript module
    if (src.endsWith('.js')) {
        return import(src);
    }

    // CSS файл

    if (src.endsWith('.css')) {
        if (!cssPromises[src]) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = src;
            cssPromises[src] = new Promise(resolve => {
                link.addEventListener('load', () => resolve());
            });
            document.head.append(link);
        }
        return cssPromises[src];
    }
    return fetch(src).then(res => res.json());
}


const appContainer = document.getElementById('app');

const searchParams = new URLSearchParams(window.location.search);
const filmNumber = searchParams.get('filmNumber');

function renderPage(moduleName, apiUrl, css) {
    Promise.all([moduleName, apiUrl, css].map(src => loadResource(src)))
        .then(([pageModule, data]) => {
            appContainer.innerHTML = '';
            appContainer.append(pageModule.render(data));
            onClickLink();
            onClickLinkDetail();
        })
}


function onClickLinkDetail() {
    linkBackArr.forEach((link) => link.addEventListener('click', function (e) {
        e.preventDefault();
        let location = window.location.origin;
        history.pushState(null, '', location);
        renderPage(
            './films-list.js',
            'https://swapi.dev/api/films',
            bootstrap
        )
    }))
}


function onClickLink() {
    linkArr.forEach((link) => link.addEventListener('click', function (e) {
        e.preventDefault();
        let href = link.getAttribute('href');
        let id = href.toString().slice(-1);
        history.pushState(id, '', href);
        renderPage(
            './film-details.js',
            `https://swapi.dev/api/films/${id}`,
            bootstrap
        )
    }))
}


window.addEventListener('popstate', () => {
    if (location.href.endsWith('index.html') || location.href.endsWith('/')) {
        renderPage(
            './films-list.js',
            'https://swapi.dev/api/films',
            bootstrap
        )
    }
    else {
        renderPage(
            './film-details.js',
            `https://swapi.dev/api/films/${history.state}`,
            bootstrap
        )
    }
})


if (filmNumber) {
    renderPage(
        './film-details.js',
        `https://swapi.dev/api/films/${filmNumber}`,
        bootstrap
    )

}
else {
    renderPage(
        './films-list.js',
        'https://swapi.dev/api/films',
        bootstrap
    )
}


