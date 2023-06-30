import {useState} from 'react';

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed: false},
      ];
    });

    setNewItem('');
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
      <form
        className='new-item-form'
        onSubmit={handleSubmit}
      >
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type='text'
            id='item'
          />
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && "No todos"}
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
