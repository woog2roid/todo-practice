import { atom } from 'recoil';
import { User } from '@supabase/supabase-js';

const todoState = atom<User>({
  key: 'todoState',
  default: null,
});

export default todoState;
