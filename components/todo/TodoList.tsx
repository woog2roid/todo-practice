import { useEffect, useState } from 'react';
import { getTodos } from '../../api/todo';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    const getData = async () => {
      const data: any = await getTodos();
      console.log(data.data);
      setTodos(data.data);
    };

    getData();
  }, []);

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
