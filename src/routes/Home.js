import Header from '../components/Header';
import TodosLogic from '../components/TodosLogic';

function TodoApp() {
  return (
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  );
}

export default TodoApp;
