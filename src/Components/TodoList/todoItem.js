const TodoItem = (props) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.completed}
      onChange={() => props.handleCheckboxChange(props.todo.id)}
    />
    <button onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>
    {props.todo.title}
  </li>
);

export default TodoItem;
