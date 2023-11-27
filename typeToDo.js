var todoList = [];
function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var deadlineInput = document.getElementById('deadlineInput');
    var todo = {
        todo: todoInput.value,
        deadline: deadlineInput.value,
        done: false,
    };
    todoList.push(todo);
    renderTodoList();
    // Clear input fields
    todoInput.value = '';
    deadlineInput.value = '';
}
function toggleTodo(index) {
    todoList[index].done = !todoList[index].done;
    renderTodoList();
}
function renderTodoList() {
    var todoListElement = document.getElementById('todoList');
    todoListElement.innerHTML = '';
    todoList.forEach(function (item, index) {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.done;
        checkbox.onclick = function () { return toggleTodo(index); };
        li.appendChild(checkbox);
        var todoSpan = document.createElement('span');
        todoSpan.textContent = item.todo;
        li.appendChild(todoSpan);
        if (item.deadline) {
            var deadlineSpan = document.createElement('span');
            deadlineSpan.textContent = "Deadline: ".concat(item.deadline);
            li.appendChild(deadlineSpan);
        }
        todoListElement.appendChild(li);
    });
}
