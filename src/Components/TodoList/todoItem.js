import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo, handleCheckboxChange, deleteTodo } = props;

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCheckboxChange(todo.id)}
      />
      <button type="button" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
      {todo.title}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  handleCheckboxChange: PropTypes.func,
  deleteTodo: PropTypes.func,
};

TodoItem.defaultProps = {
  todo: {},
  handleCheckboxChange: () => {},
  deleteTodo: () => {},
};

export default TodoItem;
