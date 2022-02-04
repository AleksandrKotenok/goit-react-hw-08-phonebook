import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { getContacts, addContact, deleteContact } from './contacts-operations';
import { changeFilter } from './contacts-actions';

const items = createReducer([], {
  [getContacts.fulfilled]: (_state, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});
const error = createReducer(null, {
  [getContacts.rejected]: (_state, { payload }) => payload,
  [addContact.rejected]: (_state, { payload }) => payload,
  [deleteContact.rejected]: (_state, { payload }) => payload,
});
const loading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
