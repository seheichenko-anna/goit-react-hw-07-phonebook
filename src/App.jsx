import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components//ContactList/ContactList';
import Filter from './components//Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from './redux/operations';
import { selectError, selectIsLoading } from './redux/contactsSlice';
import BeatLoader from 'react-spinners/BeatLoader';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <BeatLoader
        color="teal"
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {!error ? <ContactList /> : <h3>{error}</h3>}
    </div>
  );
};

export default App;
