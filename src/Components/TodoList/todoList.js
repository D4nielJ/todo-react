import TodoItem from './todoItem';

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
