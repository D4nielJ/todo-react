import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './header';
import InputTodo from './inputTodo';
import TodoList from './todoList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleCheckboxChange = (id) => {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    ]);
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
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
