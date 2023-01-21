import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Input } from 'components';

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
    <form onSubmit={onSubmit}>
      <Input type="text" name="name" />
      <Input type="email" name="email" />
      <Input type="password" name="password" />
      <Button type="submit">Register</Button>
    </form>
  );
}
