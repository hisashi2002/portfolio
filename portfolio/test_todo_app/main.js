const form = document.getElementById('form');
const input = document.getElementById('input');
const ul = document.getElementById('ul')
const btn = document.querySelector('#btn')
const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach (todo => {
        add(todo);
    })
}


form.addEventListener("submit", function(event){
    event.preventDefault();
    add();
});

function add (todo) {
    let todoText = input.value;

    if (todo) {
       todoText = todo.text; 
    }

    if (todoText) { 
    const li = document.createElement('li');
    li.innerText = todoText;
    li.classList.add('list_group');

    if (todo && todo.completed) {
        li.classList.add('strike-through');
    }

    li.addEventListener('contextmenu', function(event){
        event.preventDefault();
        li.remove();
        saveData();
    });

    li.addEventListener('click', function() {
        li.classList.toggle('strike-through')
        saveData();
    });

    ul.appendChild(li);
    input.value = '';
    saveData();
    }
}

btn.addEventListener('click', function(event) {
    event.preventDefault();
    ul.remove();
    saveData();
});

function saveData() {
    const lists = document.querySelectorAll('li');
    let todos = [];


    lists.forEach(list => {
        let todo = {
            text: list.innerText,
            completed: list.classList.contains('strike-through')
        };
        todos.push(todo);
    });

    localStorage.setItem('todos', JSON.stringify(todos))

}


