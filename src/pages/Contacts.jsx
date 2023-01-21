import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/operations';
import { Section, Container, Form, Filter, ContactsList } from 'components';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Form />
        <Filter />
        <ContactsList />
      </Container>
    </Section>
  );
}
