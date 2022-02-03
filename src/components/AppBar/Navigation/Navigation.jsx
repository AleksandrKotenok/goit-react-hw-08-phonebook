import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../../redux/auth/auth-selectors';

import s from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink exact="true" to="/" className={s.link}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={s.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
