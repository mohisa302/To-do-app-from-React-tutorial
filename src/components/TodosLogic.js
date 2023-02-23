import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

function TodosLogic() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

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
