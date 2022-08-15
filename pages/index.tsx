import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import TodoAdd from '../components/todo/TodoAdd';
import TodoList from '../components/todo/TodoList';
import { SignInButton, SignOutButton } from '../components/common/AuthButton';
import { useEffect, useState } from 'react';
import { getUser, getSession } from '../api/auth';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../utils/supabase';

const Home: NextPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const data = getUser();
    setUser(data);
  }, [session]);

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
          <TodoAdd /> <TodoList />
        </>
      ) : (
        <></>
      )}
      {user !== null ? <SignOutButton /> : <SignInButton />}
    </div>
  );
};

export default Home;
