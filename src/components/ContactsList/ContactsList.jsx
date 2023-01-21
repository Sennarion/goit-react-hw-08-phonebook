import { useSelector } from 'react-redux';
import { ContactsListItem, SubTitle } from 'components';
import { List } from './ContactsList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';

function ContactsList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <SubTitle>Contacts</SubTitle>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsListItem key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </>
  );
}

export default ContactsList;
