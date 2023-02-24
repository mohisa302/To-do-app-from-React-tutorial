import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todos, setTodos, delTodo, setUpdate,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          itemProp={todo}
          setTodos={setTodos}
          delTodo={delTodo}
          setUpdate={setUpdate}
          key={todo.id}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(Array).isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
