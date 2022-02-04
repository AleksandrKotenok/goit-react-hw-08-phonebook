import { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Login } from '../Login/Login';
import { Contacts } from '../Contacts/Contacts';
import Register from '../Register/Register';
import { AppBar } from '../AppBar/AppBar';
import { Home } from '../Home/Home';
import { ROUTES } from '../Routes/routes';
//import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Routes>
        {/* <Suspense fallback={<p>Loading...</p>}> */}

        <Route
          path={ROUTES.Home}
          element={
            <PublicRoute exact>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.Login}
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.Register}
          element={
            <PublicRoute restricted>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.Contacts}
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
        {/* </Suspense> */}
      </Routes>
    </>
  );
};
