import { signInGoogle, signOutGoogle } from '../../api/auth';

export function SignInButton() {
  return <button onClick={signInGoogle}>로그인</button>;
}

export function SignOutButton() {
  return <button onClick={signOutGoogle}>로그아웃</button>;
}
