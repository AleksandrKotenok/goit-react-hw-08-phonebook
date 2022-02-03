import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { lazy, Suspense } from 'react';
import { Login } from '../Login/Login';
import { Contacts } from '../Contacts/Contacts';
import Register from '../Register/Register';
import { AppBar } from '../AppBar/AppBar';
import { Home } from '../Home/Home';
import { ROUTES } from '../../routes';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
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
}
