import { atom } from 'recoil';
import { Session } from '@supabase/supabase-js';

const sessionState = atom<Session>({
  key: 'sessionState',
  default: null,
});

export default sessionState;
