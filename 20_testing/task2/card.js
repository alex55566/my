document.addEventListener('DOMContentLoaded', function () {
  let countdownSec = 60;

  function countdown() {
    document.getElementById('time').innerHTML = countdownSec;
    countdownSec--;
    if (countdownSec < 0) {
      clearTimeout(window.timer);
      setTimeout(function () {
        alert('Игра окончена');
        let gameover = document.createElement('div');

        gameover.classList.add('gameover');
        gameover.innerHTML = 'Сыграть еще раз';

        button.after(gameover);
        gameover.addEventListener('click', () => {
          location.reload();
        });
      }, 500);
    } else {
      window.timer = setTimeout(countdown, 1000);
    }
  }

  const button = document.getElementById('buttonofstart');
  button.addEventListener('click', () => {
    let inputValue = document.getElementById('numberofcards').value;

    if (inputValue >= 2 && inputValue <= 10 && inputValue % 2 === 0) {
      inputValue = Number(inputValue);
      button.disabled = true;
      window.timer = null;

      countdown();
    } else {
      alert('Введите четное количество карт от 2 до 10 включительно');
      document.getElementById('numberofcards').value = 4;
      return;
    }
    createField();
    matchingCardsAndYetes(fisherYetes(countNumber()));
  });

  let cardOnFieldArr = [];
  let cardStyle = [];
  let countarr = [];

  document.addEventListener('click', function (e) {
    const cardOnField = e.target.closest('.card');
    if (cardOnField) {
      if (cardOnField.classList.contains('active')) {
        return;
      }
      cardOnField.classList.add('active');
      cardOnFieldArr.push(cardOnField.innerHTML);
      cardStyle.push(cardOnField);
    }
    if (cardOnFieldArr.length === 2) {
      if (
        cardOnFieldArr[cardOnFieldArr.length - 1] ===
        cardOnFieldArr[cardOnFieldArr.length - 2]
      ) {
        let count = 1;

        countarr.push(count);
        let arrForCheck = countNumber();

        if (countarr.length === arrForCheck.length / 2) {
          setTimeout(function () {
            clearTimeout(window.timer);
            alert('Игра окончена');
            let gameover = document.createElement('div');

            gameover.classList.add('gameover');
            gameover.innerHTML = 'Сыграть еще раз';

            document.body.append(gameover);
            gameover.addEventListener('click', () => {
              location.reload();
            });
          }, 500);
        }
        cardOnFieldArr = [];
        cardStyle = [];
      }
    }
    if (cardOnFieldArr.length === 3) {
      if (
        cardOnFieldArr[cardOnFieldArr.length - 2] !==
        cardOnFieldArr[cardOnFieldArr.length - 3]
      ) {
        cardOnFieldArr.splice(0, 2);
        for (let i = 0; i < cardStyle.length - 1; i++) {
          cardStyle[i].classList.remove('active');
        }
        cardStyle.splice(0, 2);
      }
    }
  });

  function calculateField() {
    let inputValue = document.getElementById('numberofcards').value;
    let field = Math.pow(inputValue, 2);

    return field;
  }

  function createField() {
    let parentcard = document.createElement('div');

    parentcard.classList.add('parentcard');
    document.body.append(parentcard);
    let countfield = calculateField();

    for (let i = 0; i < countfield; i++) {
      let card = document.createElement('div');
      card.classList.add('card', `card${countfield}`);
      parentcard.appendChild(card);
    }
  }

  function countNumber() {
    let arrCount = [];
    let countNumber = calculateField() / 2;

    for (let i = 1; i <= countNumber; ++i) {
      arrCount.push(i);
    }
    let copyArrCount = arrCount.slice(0);
    let totalArrCount = arrCount.concat(copyArrCount);

    return totalArrCount;
  }

  function fisherYetes(number) {
    let j, temp;

    for (let i = number.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = number[j];
      number[j] = number[i];
      number[i] = temp;
    }
    return number;
  }

  function matchingCardsAndYetes(yetesForCard) {
    let cardsArray = [];
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
      for (let i = 0; i < yetesForCard.length; i++)
        cardsArray.push((cards[i].innerHTML = yetesForCard[i]));
    }
    return cardsArray;
  }
});
