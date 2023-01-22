import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import {
  StyledHeader,
  HeaderContent,
  Logo,
  Nav,
  UserInfo,
  NavItem,
} from './Header.styled';
import { Container, Button } from 'components';

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
            <NavItem to="/">Home</NavItem>
            {isLoggedIn ? (
              <NavItem to="/contacts">Contacts</NavItem>
            ) : (
              <>
                <NavItem to="/register">Register</NavItem>
                <NavItem to="/login">Login</NavItem>
              </>
            )}
          </Nav>
          {isLoggedIn && (
            <UserInfo>
              <p>{user.email}</p>
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
