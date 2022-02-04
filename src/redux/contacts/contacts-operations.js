import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      return await axios.get('/contacts');
    } catch (error) {
      return console.error(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    try {
      return await axios.post('/contacts', contact);
    } catch (error) {
      return console.error(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return console.error(error);
    }
  }
);
