import { useState } from 'react';
import { logIn } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

import s from './Login.module.css';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Authorization</h1>
      <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={'login'}>
          Email:
        </label>
        <input
          id={'login'}
          className={s.input}
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Email may contain @ and domain. For example example@example.com"
          required
          onChange={handleChange}
          value={email}
        />
        <label className={s.label} htmlFor={'pass'}>
          Password:
        </label>
        <input
          id={'pass'}
          className={s.input}
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
          onChange={handleChange}
          value={password}
        />
        <div className={s.buttonBox}>
          <button className={s.button} type="submit">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};
