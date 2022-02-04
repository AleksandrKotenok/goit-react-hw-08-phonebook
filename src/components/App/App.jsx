import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar } from '../AppBar/AppBar';
import { ROUTES } from '../Routes/routes';
import { FetchingCurrentUser } from '../../redux/auth/auth-selectors';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';

const AsyncHome = lazy(() => import('../Home/Home'));
const AsyncRegister = lazy(() => import('../Register/Register'));
const AsyncLogin = lazy(() => import('../Login/Login'));
const AsyncContacts = lazy(() => import('../Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(FetchingCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path={ROUTES.Home}
              element={
                <PublicRoute exact>
                  <AsyncHome />
                </PublicRoute>
              }
            />
            <Route
              path={ROUTES.Login}
              element={
                <PublicRoute restricted>
                  <AsyncLogin />
                </PublicRoute>
              }
            />
            <Route
              path={ROUTES.Register}
              element={
                <PublicRoute restricted>
                  <AsyncRegister />
                </PublicRoute>
              }
            />
            <Route
              path={ROUTES.Contacts}
              element={
                <PrivateRoute>
                  <AsyncContacts />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </>
    )
  );
};
