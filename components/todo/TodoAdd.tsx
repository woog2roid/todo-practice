import { addTodo, getTodos } from '../../api/todo';

export default function TodoAdd() {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target.todo.value;
    await addTodo(title);
    await getTodos();
  };

  return (
    <form onSubmit={onSubmit}>
      투두 애드 입니다.
      <input name="todo" />
    </form>
  );
}
