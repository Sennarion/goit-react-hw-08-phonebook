import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Container } from 'components';
import { Form, Wrapper, Input } from './Login.styled';

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
    <Container>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <label>
            Email
            <Input type="email" name="email" />
          </label>
          <label>
            Password
            <Input type="password" name="password" />
          </label>
          <Button type="submit">Login</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
