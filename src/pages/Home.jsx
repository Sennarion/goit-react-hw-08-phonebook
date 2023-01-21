import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Welcome to the Phonebook website</h1>
      <p>
        If you are a new user, please <Link to="/register">register</Link>
      </p>
      <p>
        If you already have an account, please <Link to="/login">log in</Link>
      </p>
    </>
  );
}
