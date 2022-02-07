import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/auth-operations';

import s from './Register.module.css';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h1>Registration</h1>
      <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={'regName'}>
          Name:
        </label>
        <input
          id={'regName'}
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
        <label className={s.label} htmlFor={'email'}>
          Email:
        </label>
        <input
          id={'email'}
          className={s.input}
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Email may contain @ and domain. For example example@example.com"
          required
          onChange={handleChange}
          value={email}
        />
        <label className={s.label} htmlFor={'password'}>
          Password:
        </label>
        <input
          id={'password'}
          className={s.input}
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
          onChange={handleChange}
          value={password}
        />
        <button className={s.button} type="submit">
          Sign up
        </button>
      </form>
    </>
  );
}
