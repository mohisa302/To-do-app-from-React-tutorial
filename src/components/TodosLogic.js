import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

function TodosLogic() {
  const getInitialTodos = () => {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };

  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title,
        completed: false,
      },
    ]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: updatedTitle };
        }
        return todo;
      }),
    );
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList todos={todos} setTodos={setTodos} delTodo={delTodo} setUpdate={setUpdate} />
    </div>
  );
}

export default TodosLogic;
