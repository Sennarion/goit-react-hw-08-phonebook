import { Link } from 'react-router-dom';
import { Container } from 'components';

export default function Home() {
  return (
    <Container>
      <h1>Welcome to the Phonebook website</h1>
      <p>
        If you are a new user, please <Link to="/register">register</Link>
      </p>
      <p>
        If you already have an account, please <Link to="/login">log in</Link>
      </p>
    </Container>
  );
}
