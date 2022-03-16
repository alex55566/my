let data;
let count = 0;

const container = document.getElementById('app');
container.classList.add(
  'container',
  'flex-wrap',
  'py-4',
  'text-center',
)

let totalContainer;

let btn = document.createElement('button');
btn.textContent = 'Получить данные с сервера';
btn.classList.add('btn', 'btn-primary', 'btn-lg', 'mb-5', 'border', 'border-5', 'border-info', 'rounded-pill');
container.append(btn);

let spinner = document.createElement('span');
spinner.classList.add('spinner-border', 'spinner-border-sm');
spinner.setAttribute('aria-hidden', 'true');
spinner.style.display = 'none';

btn.append(spinner);

async function loadData() {

  let checkInternet = window.navigator.onLine;
  let res;

  try {
    res = await fetch('/api/products');
  } catch {
    count = 0;
    let error = new Error('Произошла ошибка, проверьте подключение к интернету');
    throw error;
  }

  if (checkInternet === false) {
    count = 0;
    let error = new Error('Произошла ошибка, проверьте подключение к интернету')
    throw error;
  }
  else {

    if (res.status === 200) {
      try {
        data = await res.json();
      } catch (e) {
        count = 0;
        let error = new Error('Произошла ошибка, попробуйте обновить страницу позже');
        throw error;
      }
    }
    else if (res.status === 404) {
      count = 0;
      let error = new Error('Список товаров пуст');
      throw error;
    }
    else if (res.status === 500 && count < 2) {
      count++;
      return loadData();
    }
    else if (res.status === 500 && count >= 2) {
      count = 0;
      let error = new Error('Произошла ошибка, попробуйте обновить страницу позже');
      throw error;
    }
    else if (res.status === 0) {
      count = 0;
      let error = new Error('Произошла ошибка, проверьте подключение к интернету');
      throw error;
    }
  }
  return data
}

btn.addEventListener('click', () => {

  if (typeof totalContainer != 'undefined') {
    totalContainer.remove()
  }

  spinner.style.display = '';
  btn.disabled = true;
  loadData()
    .then(resp => {
      loadPage()
    })
    .catch(error => {
      renderError(error)
      renderSpinner()
    })
})

function loadPage() {
  if (data.products.length > 0) {
    let picturesLink = []
    data.products.forEach((product) => {
      picturesLink.push(product.image)
    })

    function loadImage(path) {
      return new Promise((resolve, reject) => {
        let img = document.createElement('img')
        img.src = path

        img.onload = () => resolve(img)
        img.onerror = () => reject(path)
      });
    }

    Promise.all(picturesLink.map(loadImage)).then(images => {
      renderPage(images)
      renderSpinner()
    })

    function renderPage(img) {

      totalContainer = document.createElement('div');
      totalContainer.classList.add(
        'container',
        'd-flex',
        'justify-content-between',
        'flex-wrap',
        'flex-row',
        'py-4',
        'text-center'
      )
      container.append(totalContainer);

      for (let i = 0; i < data.products.length; ++i) {

        let cardCOntainer = document.createElement('div');
        cardCOntainer.classList.add('card');
        cardCOntainer.style.width = '45%';
        cardCOntainer.classList.add('mb-5');
        totalContainer.append(cardCOntainer);

        let cardImg = document.createElement('div');
        cardImg.classList.add('card-img-top');
        cardCOntainer.append(cardImg);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardCOntainer.append(cardBody);

        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardBody.append(cardTitle);

        let cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardBody.append(cardText);

        let name = cardTitle
        name.textContent = data.products[i].name

        let price = cardText
        price.textContent = data.products[i].price

        let image = cardImg
        cardImg.append(img[i])
        img[i].style.width = '100%';
      }
    }
  }
}

function renderError(err) {
  let infoError = document.createElement('p')
  infoError.style.backgroundColor = 'grey';
  infoError.classList.add('mb-5');
  infoError.style.width = '45%';
  infoError.style.marginLeft = "auto";
  infoError.textContent = `Ошибка: ${err.message}`
  container.append(infoError)
  setTimeout(() => infoError.remove(), 3000)
}

function renderSpinner() {
  spinner.style.display = 'none'
  btn.disabled = false;
}
