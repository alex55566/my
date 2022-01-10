document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById('buttonofstart');
    button.addEventListener('click',
        function () {
            let inputValue = document.getElementById("numberofcards").value;
            if (inputValue >= 2 && inputValue <= 10 && inputValue % 2 === 0) {
                inputValue = Number(inputValue)
                button.disabled = true
                window.timer = null; // пока пустая переменная
                let x =60; // стартовое значение обратного отсчета
                countdown(); // вызов функции
                function countdown(){  // функция обратного отсчета
                  document.getElementById("time").innerHTML = x;
                  x--; // уменьшаем число на единицу
                  if ( x < 0 ){
                    clearTimeout(timer); // таймер остановится на нуле
                    setTimeout( function () {
                        alert('Игра окончена')
                        let gameover = document.createElement('div')
                        gameover.classList.add('gameover')
                        let textInBtn = document.createTextNode('Сыграть еще раз')
                        gameover.appendChild(textInBtn)
                        button.after(gameover);
                        gameover.addEventListener('click', function () { location.reload()
                        })
                    },500)
                  }
                  
                  
                  else {
                    window.timer = setTimeout(countdown, 1000);
                  }
                }
            } else {
                alert('Введите четное количество карт от 2 до 10 включительно')
                document.getElementById("numberofcards").value = 4
                return
            }
            createField()
            // fisherYetes(countNumber())
            matchingCardsAndYetes(fisherYetes(countNumber()))
        })


    let cardOnFieldArr = []
    let cardStyle = []
    let countarr = []
    document.addEventListener('click', function (e) {
        const cardOnField = e.target.closest('.card');
        if (cardOnField) {
            if (cardOnField.classList.contains('active')) {
                return
            }
            cardOnField.classList.add('active');
            cardOnFieldArr.push(cardOnField.innerHTML)
            cardStyle.push(cardOnField)
            /*  console.log(cardStyle) */


        }
        if (cardOnFieldArr.length === 2) {
            /*  console.log(cardOnFieldArr.length) */
            if (cardOnFieldArr[cardOnFieldArr.length - 1] === cardOnFieldArr[cardOnFieldArr.length - 2]) {
                console.log('Работает')
                let count = 1
                countarr.push(count)
                // console.log(countarr.length)
                let x = countNumber()
                // console.log(x.length)
                if (countarr.length === (x.length) / 2) {
                    
                    setTimeout( function () {
                        clearTimeout(window.timer)
                        alert('Игра окончена')
                        let gameover = document.createElement('div')
                        gameover.classList.add('gameover')
                        let textInBtn = document.createTextNode('Сыграть еще раз')
                        gameover.appendChild(textInBtn)
                        document.body.append(gameover);
                        gameover.addEventListener('click', function () { location.reload()
                        })
                },500)
                }
                cardOnFieldArr = []
                cardStyle = []
            } else {
                /* console.log('Не работает') */
            }
        }
        if (cardOnFieldArr.length === 3) {
            /*  console.log(cardOnFieldArr.length) */
            if (cardOnFieldArr[cardOnFieldArr.length - 2] !== cardOnFieldArr[cardOnFieldArr.length - 3]) {
                /* console.log('Ошибка') */
                cardOnFieldArr.splice(0, 2)
                for (i = 0; i < cardStyle.length - 1; i++) {
                    cardStyle[i].classList.remove('active')

                }
                cardStyle.splice(0, 2)
            }
        }
        /*  console.log(cardOnFieldArr) */
    })

    function calculateField() {
        let inputValue = document.getElementById("numberofcards").value;
        let field = Math.pow(inputValue, 2)
        return field
    }

    function createField() {
        let parentcard = document.createElement('div')
        parentcard.classList.add('parentcard')
        document.body.append(parentcard)
        let countfield = calculateField()
        if (countfield > 0 && countfield === 16) {
            /*  console.log(countfield) */
            for (i = 0; i < countfield; i++) {
                let card = document.createElement('div')
                card.classList.add('card','card16')
                parentcard.appendChild(card)
            }
        }
        if (countfield > 0 && countfield === 4) {
            /*  console.log(countfield) */
            for (i = 0; i < countfield; i++) {
                let card = document.createElement('div')
                card.classList.add('card','card4')
                parentcard.appendChild(card)
            }
        }
        if (countfield > 0 && countfield === 36) {
            /*  console.log(countfield) */
            for (i = 0; i < countfield; i++) {
                let card = document.createElement('div')
                card.classList.add('card','card36')
                parentcard.appendChild(card)
            }
        }
        if (countfield > 0 && countfield === 64) {
            /*  console.log(countfield) */
            for (i = 0; i < countfield; i++) {
                let card = document.createElement('div')
                card.classList.add('card','card64')
                parentcard.appendChild(card)
            }
        }
        if (countfield > 0 && countfield === 100) {
            /*  console.log(countfield) */
            for (i = 0; i < countfield; i++) {
                let card = document.createElement('div')
                card.classList.add('card','card100')
                parentcard.appendChild(card)
            }
        }
    }

    function countNumber() {
        let arrCount = []
        let countNumber = (calculateField() / 2)
        if (countNumber > 0) {
            for (i = 1; i <= countNumber; ++i) {
                arrCount.push(i)
            }
            let copyArrCount = arrCount.slice(0)
            let totalArrCount = arrCount.concat(copyArrCount)
            return totalArrCount
        }
    }

    function fisherYetes(number) {
        // let arrFisherYetes = countNumber()
        let j, temp;
        for (let i = number.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = number[j];
            number[j] = number[i];
            number[i] = temp;
        }
        /*    console.log(number) */
        return number
    }

    function matchingCardsAndYetes(yetesForCard) {
        let cardsArray = []
        let cards = document.getElementsByClassName('card')
        for (let i = 0; i < cards.length; i++) {
            for (let i = 0; i < yetesForCard.length; i++)
                cardsArray.push(cards[i].innerHTML = yetesForCard[i])
        }
        /*         console.log(cardsArray)
                console.log(yetesForCard) */
        return cardsArray

    }
})

function x (value) {
    console.log(Boolean(value))
    return Boolean(value)
}
x('')