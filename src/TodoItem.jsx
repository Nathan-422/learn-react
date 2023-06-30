export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <li>
      <label htmlFor={id}>
        <input
          type='checkbox'
          onChange={(e) => toggleTodo(id, e.target.checked)}
          checked={completed}
          id={id}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}
