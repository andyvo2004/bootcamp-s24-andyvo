//solution-

document.getElementById('add-button').addEventListener("click", () => {
    let todoList = document.getElementById("todo-list");
    let todoInput = document.getElementById("todo-input");
    let newTodo = todoInput.value;

    if (newTodo.trim() !== "") {
        let listItem = document.createElement("li");
        let removeButton = document.createElement("buttom");
        removeButton.className = "remove-button";
        removeButton.textContent = "Remove";
        removeButton.onclick = () => {
            let todoList = document.getElementById("todo-list");
            todoList.removeChild(listItem);
        }
        listItem.textContent = newTodo;
        listItem.appendChild(removeButton);
        todoList.appendChild(listItem);
        todoInput.value = "";
    } else {
        alert("Please enter a task");
    }
})