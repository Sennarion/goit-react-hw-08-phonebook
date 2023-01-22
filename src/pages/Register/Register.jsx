import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Container } from 'components';
import { Form, Wrapper, Input } from 'pages/Login/Login.styled';

export default function Register() {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    dispatch(register({ name, email, password }));

    e.currentTarget.reset();
  };

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <label>
            Username
            <Input type="text" name="name" />
          </label>
          <label>
            Email
            <Input type="email" name="email" />
          </label>
          <label>
            Password
            <Input type="password" name="password" />
          </label>
          <Button type="submit">Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
