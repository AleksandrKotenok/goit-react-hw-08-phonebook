import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar } from '../AppBar/AppBar';
import { ROUTES } from '../routes/routes';
import { fetchingCurrentUser } from '../../redux/auth/auth-selectors';
import { getCurrentUser } from '../../redux/auth/auth-operations';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';

const AsyncHome = lazy(() => import('../views/Home/Home'));
const AsyncRegister = lazy(() => import('../views/Register/Register'));
const AsyncLogin = lazy(() => import('../views/Login/Login'));
const AsyncContacts = lazy(() => import('../views/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(fetchingCurrentUser);

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
