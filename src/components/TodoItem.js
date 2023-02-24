import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, setTodos, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => { handleChange(itemProp.id); }}
        />
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <div
        className={styles.buttons}
        style={{
          display: editing ? 'none' : 'flex',
        }}
      >
        <button type="button" onClick={handleEditing}>
          <AiFillEdit />
        </button>
        <button type="button" onClick={() => { delTodo(itemProp.id); }}>
          <FaTrash />
        </button>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.objectOf(Object).isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
