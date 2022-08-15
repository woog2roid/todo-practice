import { supabase } from '../utils/supabase';
import { getUser } from './auth';

const user = getUser();

export const addTodo = async (title: string) => {
  await supabase.from('todo').insert([
    {
      title,
      done: false,
      user: user,
    },
  ]);
};

export const getTodos = async () => {
  const data = await supabase
    .from('todo')
    .select()
    .match({
      user: user,
    })
    .order('id');
  return data;
};

export const updateTodos = async (title: string, done: boolean, id: string) => {
  await supabase
    .from('todo')
    .update([
      {
        title,
        done,
      },
    ])
    .match({ id });
};

export const deleteTodo = async (id: string) => {
  await supabase.from('todo').delete().match({ id });
};
