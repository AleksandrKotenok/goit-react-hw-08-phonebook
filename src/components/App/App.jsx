import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Login } from '../Login/Login';
import { Contacts } from '../Contacts/Contacts';
import Register from '../Register/Register';
import { AppBar } from '../AppBar/AppBar';
import { Home } from '../Home/Home';
import { ROUTES } from '../../routes';
//import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { getCurrentUser, logIn } from '../../redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Routes>
        <Route path={ROUTES.Home} exact element={<Home />} />
        <Route path={ROUTES.Login} exact element={<Login />} />
        <Route path={ROUTES.Register} exact element={<Register />} />
        <Route path={ROUTES.Contacts} exact element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
