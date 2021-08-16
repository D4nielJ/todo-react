import React, { useState } from 'react';
import Header from './header';
import InputTodo from './inputTodo';
import TodoList from './todoList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const addTodoItem = (title) => {
    const newTodo = { id: 4, title: title, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleCheckboxChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  return (
    <div className="todo-container">
      <Header />
      <InputTodo addTodoItem={addTodoItem} />
      <TodoList
        todos={todos}
        handleCheckboxChange={handleCheckboxChange}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoContainer;
