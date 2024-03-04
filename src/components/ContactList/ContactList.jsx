import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filterSlice';
import ContactListItem from './ContactListItem/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = filter
    ? contacts.filter(item => item.name.toLowerCase().includes(filter))
    : contacts;

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
