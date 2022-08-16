import { atom } from 'recoil';
import ITodo from '../types/todo';

const todoState = atom<ITodo[]>({
  key: 'todoState',
  default: null,
});

export default todoState;
