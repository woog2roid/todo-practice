import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { getUser, getSession } from '../api/auth';
import { supabase } from '../utils/supabase';
import userState from '../store/user';
import sessionState from '../store/session';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
