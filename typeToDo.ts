interface TodoItem {
    todo: string;
    deadline?: string;
    done: boolean;
}

const todoList: TodoItem[] = [];

function addTodo() {
    const todoInput = document.getElementById('todoInput') as HTMLInputElement;
    const deadlineInput = document.getElementById('deadlineInput') as HTMLInputElement;

    const todo: TodoItem = {
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

function toggleTodo(index: number) {
    todoList[index].done = !todoList[index].done;
    renderTodoList();
}

function renderTodoList() {
    const todoListElement = document.getElementById('todoList') as HTMLUListElement; //тут чат допоміг
    todoListElement.innerHTML = '';

    todoList.forEach((item, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.done;
        checkbox.onclick = () => toggleTodo(index);

        li.appendChild(checkbox);

        const todoSpan = document.createElement('span');
        todoSpan.textContent = item.todo;
        li.appendChild(todoSpan);

        if (item.deadline) {
            const deadlineSpan = document.createElement('span');
            deadlineSpan.textContent = `Deadline: ${item.deadline}`;
            li.appendChild(deadlineSpan);
        }

        todoListElement.appendChild(li);
    });
}


