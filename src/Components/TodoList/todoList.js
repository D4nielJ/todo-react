import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = (props) => {
  const { todos, handleCheckboxChange, deleteTodo } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheckboxChange={handleCheckboxChange}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  handleCheckboxChange: PropTypes.func,
  deleteTodo: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  handleCheckboxChange: () => {},
  deleteTodo: () => {},
};

export default TodoList;
