import React, { /* Hint 1: Import useState from React */ useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todoList, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input !== "") {
      setTodos([...todoList, { task:input, completed: false }]);
      setInput("");
    }
  }

  const toggleComplete = (task) => {
    setTodos(todoList.map((curr) => {
      if (curr.task === task) {
        curr.completed = !curr.completed;
      }
      return curr;
    }))
  }

  const removeTodo = (task) => {
    setTodos(todoList.filter((curr) => curr.task !== task))
  }

  return (
    <div className="todo-list">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit" onClick={addTodo}>Add</button>
      
      {todoList.map((todo) => (
          <div className={`todo-item ${todo.completed ? "complete" : ""}`}>
          <span onClick={() => toggleComplete(todo.task)}>{todo.task}</span>
          <button onClick={() => removeTodo(todo.task)}>Remove</button>
          </div>
        ) 
      )}
    </div>
  );
}

export default TodoList;

