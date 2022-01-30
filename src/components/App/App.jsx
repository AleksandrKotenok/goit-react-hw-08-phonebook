import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Login } from '../Login/Login';
import Contacts from '../Contacts/Contacts';
import Register from '../Register/Register';
import icon from '../../images/phonebook.png';
import { ROUTES } from '../../routes';
//const Login = lazy(() => import('../Login/Login'));
export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/login">
          <img src={icon} alt="icon" width="50px" height="35px" />
        </Link>
      </header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path={ROUTES.Register} element={<Register />} />
        {/* <Route path={ROUTES.Contacts} element={Contacts} /> */}
      </Routes>
    </BrowserRouter>
  );
}
