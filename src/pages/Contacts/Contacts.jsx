import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { getContacts } from 'redux/contacts/operations';
import { selectLoadingStatus } from 'redux/contacts/selectors';
import { Section, Container, Form, Filter, ContactsList } from 'components';
import { theme } from 'styles/theme';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Form />
        <Filter />
        {isLoading ? (
          <ThreeDots
            height={theme.spacing(22)}
            width={theme.spacing(22)}
            radius="9"
            color={theme.colors.accent}
            ariaLabel="three-dots-loading"
            visible={true}
          />
        ) : (
          <ContactsList />
        )}
      </Container>
    </Section>
  );
}
