import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getUser } from '../../api/auth';
import { getTodos } from '../../api/todo';
import userState from '../../store/user';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState();
  const user = useRecoilValue(userState);

  useEffect(() => {
    const getData = async () => {
      const data: any = await getTodos(user?.id);
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
          return <TodoItem title={todo.title} />;
        })
      ) : (
        <></>
      )}
    </>
  );
}
