import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoItem(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={onChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func,
};

InputTodo.defaultProps = {
  addTodoItem: () => {},
};

export default InputTodo;
