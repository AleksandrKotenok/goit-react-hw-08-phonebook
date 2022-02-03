import { useSelector } from 'react-redux';
import { Navigation } from './Navigation/Navigation';
import { AuthNavigation } from './AuthNavigation/AuthNavigation';
import { UserMenu } from './UserMenu/UserMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

import s from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};
