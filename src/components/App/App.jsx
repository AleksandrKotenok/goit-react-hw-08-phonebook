import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Contacts from '../Contacts/Contacts';
import Register from '../Register/Register';
import { ROUTES } from '../../routes';

export default function App() {
  return (
    <BrowserRouter>
      <Login />
      <Register />
      <Contacts />
    </BrowserRouter>
  );
}
