/// <reference types="cypress" />
describe('Приложение игра в пары', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
    cy.get('form').find('button').click();
  });

  it('Проверка поля', () => {
    cy.get('.parentcard')
      .find('div')
      .should('have.length', '16')
      .should('not.have.class', 'active');
  });

  it('Проверка открытой карточки', () => {
    cy.get('.parentcard div')
      .its('length')
      .then((elementCount) => {
        let selected = Cypress._.random(elementCount - 1);
        cy.get('.parentcard div')
          .eq(selected)
          .click()
          .should('have.class', 'active');
      });
  });

  it('Поиск пары', () => {
    let arr = [];
    let check = 'false';

    cy.get('.parentcard div').then((arr) => {
      clickCard(arr);
    });

    function clickCard(array) {
      let last = array[array.length - 1];
      let prelast = array[array.length - 2];
      for (let i = 0; i < array.length; ++i) {
        let response = array[i];
        response.click();
        checkArr(response, last, prelast);
        if (check === 'true') break;
      }
    }

    function checkArr(el, ellast, elprelast) {
      arr.push(el);
      if (arr.length === 2) {
        if (arr[0].textContent === arr[1].textContent) {
          check = 'true';
          checkStatus(arr[0], arr[1]);
        } else {
          arr = [];
        }
      }
      if (
        ellast.classList.contains('active') &&
        elprelast.classList.contains('active') &&
        ellast.textContent != elprelast.textContent
      ) {
        renderError('пар не найдено');
      }
    }

    function checkStatus(card1, card2) {
      cy.get(card1).should('have.class', 'active');
      cy.get(card2).should('have.class', 'active');
    }

    function renderError(text) {
      let error = document.createElement('div');
      error.innerHTML = text;
      cy.get('body').then((total) => {
        total.prepend(error);
      });
    }
  });

  it('Поиск непары', () => {
    let arr = [];
    let check = 'false';

    cy.get('.parentcard div').then((arr) => {
      clickCard(arr);
    });

    function clickCard(array) {
      for (let i = 0; i < array.length; ++i) {
        let response = array[i];
        response.click();
        checkArr(response);
        if (check === 'true') break;
      }
    }

    function checkArr(el) {
      arr.push(el);
      if (arr.length === 2) {
        if (arr[0].textContent != arr[1].textContent) {
          check = 'true';
          checkStatus(arr[0], arr[1]);
        } else {
          arr = [];
        }
      }
    }

    function checkStatus(card1, card2) {
      cy.get(card1).should('have.class', 'active');
      cy.get(card2).should('have.class', 'active');
    }
  });
});
