import {useState} from 'react';
import NewTodoForm from './NewTodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false},
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed};
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && 'No todos'}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor={todo.id}>
                <input
                  type='checkbox'
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  checked={todo.completed}
                  id={todo.id}
                />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
