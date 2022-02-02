import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { lazy, Suspense } from 'react';
import { Login } from '../Login/Login';
import Contacts from '../Contacts/Contacts';
import Register from '../Register/Register';
import { UserMenu } from '../UserMenu/UserMenu';
import icon from '../../images/phonebook.png';
import { ROUTES } from '../../routes';
//const Login = lazy(() => import('../Login/Login'));
export default function App() {
  const isLoggedIn1 = useSelector(
    state => state.users.mutations.peNVZ5SlYnAmUJz0Ms9rb
  );
  console.log(isLoggedIn1);
  const isLoggedIn = false;
  return (
    <>
      <header>
        <Link to={ROUTES.Login}>
          <img src={icon} alt="icon" width="50px" height="35px" />
        </Link>
      </header>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<UserMenu />} />
        ) : (
          <Route path={ROUTES.Login} element={<Login />} />
        )}
        <Route path="/" element={<UserMenu />} />
        <Route path={ROUTES.Login} element={<Login />} />
        <Route path={ROUTES.Register} element={<Register />} />
        <Route path={ROUTES.Contacts} element={<Contacts />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}
