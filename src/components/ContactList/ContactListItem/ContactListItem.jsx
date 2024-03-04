import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../../redux/operations';
import { ButtonDelete, ContactsItem } from './ContactListItem.styled';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <ContactsItem key={id}>
      {name}: {phone}
      <ButtonDelete onClick={() => handleDeleteContact(id)}>
        Delete
      </ButtonDelete>
    </ContactsItem>
  );
};

export default ContactListItem;
