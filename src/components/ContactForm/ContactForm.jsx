import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/operations';
import { selectContacts } from '../../redux/contactsSlice';
import {
  ButtonAdd,
  Form,
  SearchInput,
  SearchWrapper,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact(name, phone);
    setName('');
    setPhone('');
  };

  const handleAddContact = (name, phone) => {
    const newContact = {
      name: name.trim(),
      phone: phone.trim(),
    };
    const isContactExist = contacts.some(contact => contact.name === name);
    if (isContactExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContactThunk(newContact));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchWrapper>
        {' '}
        Name
        <SearchInput
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </SearchWrapper>
      <SearchWrapper>
        {' '}
        Number
        <SearchInput
          type="tel"
          name="phone"
          required
          value={phone}
          onChange={handleChange}
        />
      </SearchWrapper>
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </Form>
  );
};
export default ContactForm;
