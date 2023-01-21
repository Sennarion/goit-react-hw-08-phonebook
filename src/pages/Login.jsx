import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Input } from 'components';

export default function Login() {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    dispatch(logIn({ email, password }));
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <Input type="email" name="email" />
      <Input type="password" name="password" />
      <Button type="submit">Login</Button>
    </form>
  );
}
