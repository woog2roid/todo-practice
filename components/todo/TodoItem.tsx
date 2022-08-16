import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { deleteTodo, getTodos, updateTodos } from '../../api/todo';
import todoState from '../../store/todo';
import ITodo from '../../types/todo';

const Wrapper = styled.div`
  border: 1px solid;
`;

interface props {
  todo: ITodo;
}

export default function TodoItem({ todo }: props) {
  const { title, id, user, done } = todo;
  const [todos, setTodos] = useRecoilState<ITodo[] | null>(todoState);

  const onClickToggle = async () => {
    updateTodos(title, !done, id);
    const data = await getTodos(user);
    console.log(data.data);
    setTodos(data.data);
  };

  const onClickDelete = async () => {
    deleteTodo(id);
    const data = await getTodos(user);
    console.log(data.data);
    setTodos(data.data);
  };

  return (
    <Wrapper>
      <div className="title">{title}</div>
      <button onClick={onClickToggle}>
        {done === true ? '아직...' : '끝!'}
      </button>
      <button onClick={onClickDelete}>삭제</button>
    </Wrapper>
  );
}
