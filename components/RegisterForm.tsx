// components/LoginForm.tsx
import { handleRegister } from '@/api/auth';
import { useAppDispatch } from '@/redux/hook';
import React, { useEffect, useState } from 'react';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const dispatch = useAppDispatch()

  const handleSignUp = () => {
    // Add your login logic here
    dispatch(handleRegister({ name, email, password }))
    console.log('Login clicked', { email, password });
  };

  useEffect(() => {

  }, [password, repassword])

  return (
    <div className={"login__loginForm"}>
      <h2>Sign Up Gee!</h2>
      <div className={"login__loginForm--inputGroup "}>
        <label>name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className={"login__loginForm--inputGroup "}>
        <label>E-mail</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={"login__loginForm--inputGroup"}>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className={"login__loginForm--inputGroup"}>
        <label>Re-Password</label>
        <input type="password" value={repassword} onChange={(e) => setRePassword(e.target.value)} />
      </div>
      <div className=""><button onClick={handleSignUp}>Register</button></div>
    </div>
  );
};

export default RegisterForm;
