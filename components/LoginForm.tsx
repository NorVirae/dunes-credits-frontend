// components/LoginForm.tsx
import { handleLogin } from '@/api/auth';
import { useAppDispatch } from '@/redux/hook';
import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleLoginAction = () => {
    dispatch(handleLogin({ email, password }))
    // Add your login logic here
    console.log('Login clicked', { email, password });
  };

  return (
    <div className={"login__loginForm"}>
      <h2>Login Gee!</h2>
      <div className={"login__loginForm--inputGroup "}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={"login__loginForm--inputGroup"}>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className=""><button onClick={handleLoginAction}>Login</button></div>
    </div>
  );
};

export default LoginForm;
