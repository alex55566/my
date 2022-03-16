export let linkBackArr = [];

export let linkBackLink;

export function render(data) {
    const container = document.createElement('div');
    container.classList.add(
        'container',
        'd-flex',
        'justify-content-between',
        'flex-wrap',
        'flex-column',
        'py-4',
        'text-center'
    )

    let episode = document.createElement('h2');
    let title = document.createElement('h3');
    let info = document.createElement('p');
    info.classList.add('text-muted');

    episode.textContent = `Episode: ${data.episode_id}`;
    title.textContent = data.title;
    info.textContent = data.opening_crawl;

    linkBackLink = document.createElement('a');
    linkBackLink.classList.add('backlink');
    linkBackLink.textContent = 'back to episodes';
    linkBackLink.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block', 'mb-5', 'border', 'border-5', 'border-info', 'rounded-pill', 'w-25');
    linkBackArr.push(linkBackLink);

    let planets = data.planets;
    let species = data.species;

    let planetProm = planets.map(planet => fetch(planet).then(res => res.json()));
    let speciesProm = species.map(specie => fetch(specie).then(res => res.json()));

    const allPlanetsProm = Promise.all(planetProm);
    const allSpeciesProm = Promise.all(speciesProm);

    const allDataProm = Promise.all([allPlanetsProm, allSpeciesProm]);

    async function allData() {
        const allData = await allDataProm
        return allData
    }
    allData().then(allData => {
        renderDetail();
    })

    async function renderDetail() {
        let renderData = await allData();

        container.append(episode);
        container.append(title);
        container.append(linkBackLink);
        container.append(info);

        let totalPlanets = document.createElement('ul');
        totalPlanets.textContent = 'Список планет';
        renderData[0].forEach((data) => {
            let planet = document.createElement('li');
            planet.textContent = data.name;
            planet.classList.add('list-group-item', 'list-group-item-info', 'border', 'border-5', 'border-info', 'rounded-pill', 'mb-2');
            totalPlanets.append(planet);
            container.append(totalPlanets);
        })

        let totalSpecies = document.createElement('ul');
        totalSpecies.textContent = 'Список рас';
        renderData[1].forEach((data) => {
            let specie = document.createElement('li');
            specie.textContent = data.name;
            specie.classList.add('list-group-item', 'list-group-item-info', 'border', 'border-5', 'border-info', 'rounded-pill', 'mb-2');
            totalSpecies.append(specie);
            container.append(totalSpecies);
        })
    }

    return container;
}

