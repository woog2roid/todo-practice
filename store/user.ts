import { atom } from 'recoil';
import { User } from '@supabase/supabase-js';

const userState = atom<User>({
  key: 'userState',
  default: null,
});

export default userState;
