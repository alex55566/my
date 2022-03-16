let pagekey = document.getElementById('todo-app').getAttribute('data-pagekey');

export function getTodoList(owner) {
  const list = JSON.parse(localStorage.getItem(owner)) || [];
  return list;
}

export function createTodoItem({ owner, name }) {
  //  получаем список дел
  const list = JSON.parse(localStorage.getItem(owner)) || [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === name) {
      alert('Такое дело уже!');
      return;
    }
  }
  const listtodos = [];
  list.forEach(el => {
    listtodos.push(el)
  });
  //  создаем дела
  let todo = {
    name,
    owner,
    done: false,
  };
  listtodos.push(todo);
  console.log(todo);
  localStorage.setItem(owner, JSON.stringify(listtodos));
  return todo;
}

export function switchTodoItemDone({ todoItem }) {
  todoItem.done = !todoItem.done;
  const list = JSON.parse(localStorage.getItem(pagekey)) || [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === todoItem.name) {
      list[i].done = todoItem.done
    }
  }
  localStorage.setItem(pagekey, JSON.stringify(list));
}

export function deleteTodoItemDone({ element, todoItem }) {
  if (!confirm('Вы уверены?')) {
    return;
  }
  element.remove();
  const list = JSON.parse(localStorage.getItem(pagekey)) || [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === todoItem.name) {
      list.splice(i, 1);
    }
  }
  localStorage.setItem(pagekey, JSON.stringify(list));
}
