import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65e5baced7f0758a76e73155.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return { data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
