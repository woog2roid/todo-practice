import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { getUser } from '../../api/auth';
import { addTodo, getTodos } from '../../api/todo';

export default function TodoAdd() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const data = getUser();
    setUser(data);
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target.todo.value;
    await addTodo(title, user?.id);
    await getTodos(user?.id);
  };

  return (
    <form onSubmit={onSubmit}>
      투두 애드 입니다.
      <input name="todo" />
    </form>
  );
}
