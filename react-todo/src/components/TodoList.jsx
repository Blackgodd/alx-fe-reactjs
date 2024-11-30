import React, { useState } from 'react';

// Initial todos for demonstration
const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo App', completed: true },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);

  // Add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo('New Task')}>Add Todo</button>
    </div>
  );
};

export default TodoList;