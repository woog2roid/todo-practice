import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getUser } from '../../api/auth';
import { addTodo, getTodos } from '../../api/todo';
import userState from '../../store/user';

export default function TodoAdd() {
  const user = useRecoilValue(userState);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target.todo.value;
    await addTodo(title, user?.id);
    await getTodos(user?.id);
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="todo" />
    </form>
  );
}
