import TodoItem from './todoItem';

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleCheckboxChange={props.handleCheckboxChange}
        deleteTodo={props.deleteTodo}
      />
    ))}
  </ul>
);

export default TodoList;
