import { useSignUpMutation } from '../../redux/api';

import s from './Register.module.css';
export default function Register() {
  const [createUser, { isLoading }] = useSignUpMutation();
  const submitUser = e => {
    e.preventDefault();
    const newUser = {
      name: e.currentTarget.elements.name.value,
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
    };
    console.log('newUser:', newUser);
    createUser(newUser).then(({ data }) => {
      window.alert(
        ` User: ${data.user.name} created! Email: ${data.user.email}`
      );
    });
    e.currentTarget.reset();
  };
  return (
    <>
      <h1>Registration</h1>
      <form className={s.form} autoComplete="off" onSubmit={submitUser}>
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
        />
        <label className={s.label} htmlFor={'email'}>
          Email:
        </label>
        <input
          id={'email'}
          className={s.input}
          type="text"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Email may contain @ and domain. For example example@example.com"
          required
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
        />
        <button className={s.button} type="submit">
          Sign up
        </button>
      </form>
    </>
  );
}
