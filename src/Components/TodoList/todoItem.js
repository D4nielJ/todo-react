import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const {
    key: id,
    completed,
    title,
    handleCheckboxChange,
    deleteTodo,
  } = props;

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCheckboxChange(id)}
      />
      <button type="button" onClick={() => deleteTodo(id)}>
        Delete
      </button>
      {title}
    </li>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
  key: PropTypes.string,
  handleCheckboxChange: PropTypes.func,
  deleteTodo: PropTypes.func,
};

TodoItem.defaultProps = {
  title: '',
  completed: false,
  key: '0',
  handleCheckboxChange: () => {},
  deleteTodo: () => {},
};

export default TodoItem;
