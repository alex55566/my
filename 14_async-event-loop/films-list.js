export let linkArr = [];

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

    let filmCard;

    const mainTitle = document.createElement('h1');
    mainTitle.classList.add('text-center', 'fs-25', 'mb-5');
    mainTitle.textContent = 'Star Wars';
    container.append(mainTitle);

    for (const [index, el] of Object.entries(data.results)) {
        filmCard = document.createElement('a');
        filmCard.classList.add('link');
        filmCard.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block', 'mb-5', 'd-flex', 'justify-content-center', 'border', 'border-5', 'border-info', 'rounded-pill');

        const filmTitle = document.createElement('h2');
        const filmNumber = document.createElement('div');

        linkArr.push(filmCard);

        filmCard.append(filmNumber);
        filmCard.append(filmTitle);

        filmTitle.textContent = el.title;
        filmNumber.textContent = `${+index + 1}`;
        filmNumber.classList.add('mx-5', 'fs-3')
        container.append(filmCard);
        filmCard.href = `?filmNumber=${+index + 1}`
    }
    return container;
}