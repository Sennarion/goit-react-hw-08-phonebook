import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Container, AnimateBg } from 'components';
import { Title, Logo, Text, StyledLink, Wrapper } from './Home.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AnimateBg>
      <Container>
        <Title>
          Welcome to <Logo>Phonebook</Logo>
        </Title>
        <Text>
          Phonebook is a simple and convenient application for storing contacts.
          Just try it!
        </Text>
        {!isLoggedIn && (
          <Wrapper>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </Wrapper>
        )}
      </Container>
    </AnimateBg>
  );
}
