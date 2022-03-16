import { createButton as onCreateButton } from './view.js';
import { createTodoApp } from './view.js';

async function deleteEl() {
  let form = document.querySelector('.input-group');
  let list = document.querySelector('.list-group');
  let title = document.querySelector('.title');
  form.remove();
  list.remove();
  title.remove();
}

const owner = document.getElementById('todo-app').getAttribute('data-pagekey');
const mainTitle = document.getElementById('title').value;
let btn = onCreateButton();
let data;
async function loadData() {
  data = await import('./local.js');
}
loadData().then(response => {
  test();
})
btn.addEventListener('click', () => {
  if (btn.innerHTML === 'Перейти на серверное хранилище') {
    btn.innerHTML = 'Перейти на локальное хранилище';
    async function loadData() {
      data = await import('./api.js');
    }
    loadData().then(response => {
      deleteEl();
      test();
    })
  }
  else {
    btn.innerHTML = 'Перейти на серверное хранилище';
    async function loadData() {
      data = await import('./local.js');
      deleteEl();
      test();
    }
    loadData();
  }
})

async function test() {

  const todoItemList = await data.getTodoList(owner);
  createTodoApp(document.getElementById('todo-app'), {
    title: mainTitle,
    owner,
    // список дел по умолчанию при загрузке приложения
    todoItemList,
    // функция создания нового дела, правая функция вызывается в левой
    onCreateFormSubmit: data.createTodoItem,
    onDoneClick: data.switchTodoItemDone,
    onDeleteClick: data.deleteTodoItemDone,
  });
};


