import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import 'react-toastify/dist/ReactToastify.min.css';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { refreshUser } from 'redux/auth/operations';
import {
  selectIsRefreshing,
  selectAuthErrorStatus,
} from 'redux/auth/selectors';
import { selectContactsErrorStatus } from 'redux/contacts/selectors';
import SharedLayout from './SharedLayout/SharedLayout';
import Loader from './UI/Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const errorAuthStatus = useSelector(selectAuthErrorStatus);
  const errorContactsStatus = useSelector(selectContactsErrorStatus);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const error = errorAuthStatus || errorContactsStatus;

  if (error) {
    toast.error(error);
  }

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
      <ToastContainer />
    </>
  );
}
