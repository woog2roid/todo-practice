import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import TodoAdd from '../components/todo/TodoAdd';
import TodoList from '../components/todo/TodoList';

const Home: NextPage = () => {
  return (
    <div>
      <TodoAdd />
      <TodoList />
    </div>
  );
};

export default Home;
