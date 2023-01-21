import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Loader from './Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
        </Route>
      </Routes>
      <GlobalStyleComponent />
    </>
  );
}
