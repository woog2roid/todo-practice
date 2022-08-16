import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getUser } from '../../api/auth';
import { getTodos } from '../../api/todo';
import userState from '../../store/user';
import TodoItem from './TodoItem';
import ITodo from '../../types/todo';
import todoState from '../../store/todo';

export default function TodoList() {
  const [todos, setTodos] = useRecoilState<ITodo[] | null>(todoState);
  const user = useRecoilValue(userState);

  useEffect(() => {
    const getData = async () => {
      const data = await getTodos(user?.id);
      console.log(data.data);
      setTodos(data.data);
    };

    getData();
  }, [user]);

  return (
    <>
      <div>투두 리스트 입니다.</div>
      {todos !== undefined ? (
        todos?.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })
      ) : (
        <></>
      )}
    </>
  );
}
