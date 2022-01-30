import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import s from './Login.module.css';
export const Login = () => {
  return (
    <>
      <h1>Authorization</h1>
      <form className={s.form} autoComplete="off">
        <label className={s.label} htmlFor={'login'}>
          Email:
        </label>
        <input
          id={'login'}
          className={s.input}
          type="text"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Email may contain @ and domain. For example example@example.com"
          required
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
        />
        <div className={s.buttonBox}>
          <button className={s.button} type="submit">
            Sign in
          </button>
          <button className={s.button} type="submit">
            <Link className={s.link} to={ROUTES.Register}>
              Sign up
            </Link>
          </button>
        </div>
      </form>
    </>
  );
};
