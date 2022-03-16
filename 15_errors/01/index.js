export function calculateDiscount(price, percent) {
  if (typeof (price) != 'number' || typeof (percent) != 'number') {
    throw new TypeError('Аргументы не соответствуют целевому типу');
  }
  return (price / 100) * percent;
}

try {
  calculateDiscount(100, 'a')
}
catch (error) {
  if (error.name === 'TypeError') {
    console.log('Произошла ошибка: ' + error.message)
  }
  else {
    throw error
  }
}


export function getMarketingPrice(product) {
  try {
    const productObject = JSON.parse(product);
    return productObject.prices.marketingPrice;
  } catch (error) {
    switch (error.name) {
      case 'SyntaxError':
        console.log('Не удалось разобрать JSON строку');
        break;
      case 'TypeError':
        console.log('В JSON содержится пустое значение');
        break;
    }
  }
  return null;
}

getMarketingPrice('{ "product": bread }')

// Функция имитирует неудачный запрос за картинкой
function fetchAvatarImage(userId) {
  return new Promise((resolve, reject) => {
    reject('/images/default.jpg');
  });
}

export async function getAvatarUrl(userId) {
  try {
    const image = await fetchAvatarImage(userId);
    return image.url;
  }
  catch (err) {
    return err
  }
}

getAvatarUrl('test')
