import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getUser } from '../../api/auth';
import { addTodo, getTodos } from '../../api/todo';
import todoState from '../../store/todo';
import userState from '../../store/user';
import ITodo from '../../types/todo';

export default function TodoAdd() {
  const [todos, setTodos] = useRecoilState<ITodo[] | null>(todoState);
  const user = useRecoilValue(userState);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target.todo.value;
    await addTodo(title, user?.id);
    const data = await getTodos(user?.id);
    setTodos(data.data);
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="todo" />
    </form>
  );
}
