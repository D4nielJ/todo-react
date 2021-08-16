import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = (props) => {
  const { todos, handleCheckboxChange, deleteTodo } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          completed={todo.completed}
          title={todo.title}
          handleCheckboxChange={handleCheckboxChange}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      completed: PropTypes.bool,
      title: PropTypes.string,
    }),
  ),
  handleCheckboxChange: PropTypes.func,
  deleteTodo: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  handleCheckboxChange: () => {},
  deleteTodo: () => {},
};

export default TodoList;
