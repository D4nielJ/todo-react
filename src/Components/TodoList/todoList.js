import TodoItem from './todoItem';

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default TodoList;
