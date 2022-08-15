import { supabase } from '../utils/supabase';
import { User } from '@supabase/supabase-js';

export const addTodo = async (title: string, userId: string) => {
  await supabase.from('todo').insert([
    {
      title,
      done: false,
      user: userId,
    },
  ]);
};

export const getTodos = async (userId: string) => {
  const data = await supabase
    .from('todo')
    .select()
    .match({
      user: userId,
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
