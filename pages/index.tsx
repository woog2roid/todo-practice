import type { NextPage } from 'next';
import TodoAdd from '../components/todo/TodoAdd';
import TodoList from '../components/todo/TodoList';
import { SignInButton, SignOutButton } from '../components/common/AuthButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import userState from '../store/user';
import { Session, User } from '@supabase/supabase-js';
import { getUser, getSession } from '../api/auth';
import { supabase } from '../utils/supabase';
import sessionState from '../store/session';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const [user, setUser] = useRecoilState<User | null>(userState);
  const [session, setSession] = useRecoilState<Session | null>(sessionState);

  //user data
  useEffect(() => {
    const data = getUser();
    setUser(data);
  }, [session]);

  //session
  useEffect(() => {
    const data = getSession();
    setSession(data);

    //auth state가 바뀌면
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div>
      {user !== null ? (
        <>
          <TodoAdd />
          <TodoList />
        </>
      ) : (
        <></>
      )}
      {user !== null ? <SignOutButton /> : <SignInButton />}
    </div>
  );
};

export default Home;
