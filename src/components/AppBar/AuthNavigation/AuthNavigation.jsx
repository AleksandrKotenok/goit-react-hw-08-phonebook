import { NavLink } from 'react-router-dom';

import s from './AuthNavigation.module.css';

export const AuthNavigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/login" className={s.link}>
        Sign in
      </NavLink>
      <NavLink to="/register" className={s.link}>
        Sign up
      </NavLink>
    </nav>
  );
};
