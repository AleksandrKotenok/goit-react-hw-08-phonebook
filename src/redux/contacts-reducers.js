import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filCont } from './contacts-actions';

export const initialStore = {
  user: { name: null, email: null },
  token: null,
  filter: null,
};
// Reducer

const filter = createReducer(initialStore.filter, {
  [filCont]: (state, { payload }) => payload,
});

export default combineReducers({
  filter,
});
