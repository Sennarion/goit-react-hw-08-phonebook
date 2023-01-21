import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import {
  StyledHeader,
  HeaderContent,
  Logo,
  Nav,
  UserInfo,
} from './Header.styled';
import { Container, Button } from '../';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo to="/">Phonebook</Logo>
          <Nav>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn ? (
              <NavLink to="/contacts">Contacts</NavLink>
            ) : (
              <>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
              </>
            )}
          </Nav>
          {isLoggedIn && (
            <UserInfo>
              <p>{user.name}</p>
              <Button type="button" onClick={() => dispatch(logOut())}>
                Log out
              </Button>
            </UserInfo>
          )}
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
}

export default Header;
