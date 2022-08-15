import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import TodoAdd from '../components/todo/TodoAdd';
import TodoList from '../components/todo/TodoList';

import { SignInButton, SignOutButton } from '../components/common/AuthButton';
import { useEffect, useState } from 'react';
import { getUser } from '../api/auth';
import { User } from '@supabase/supabase-js';

const Home: NextPage = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const data = getUser();
    setUser(data);
  }, []);

  return (
    <div>
      <TodoAdd />
      <TodoList />
      {user !== null ? <SignOutButton /> : <SignInButton />}
    </div>
  );
};

export default Home;
