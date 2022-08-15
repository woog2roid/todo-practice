import { supabase } from '../utils/supabase';

export const addTodo = async (title: string) => {
  await supabase.from('todo').insert([
    {
      title,
      done: false,
    },
  ]);
};

export const getTodos = async () => {
  const data = await supabase.from('todo').select().order('id');
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
