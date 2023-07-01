import {TodoItem} from './TodoItem';

interface TodoList(
	todos,
	toggleTodo,
	deleteTodo,
)

export function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul className='list'>
      {todos.length === 0 && 'No todos'}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}
