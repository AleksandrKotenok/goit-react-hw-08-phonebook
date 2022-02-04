import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.isLoading;
export const getContacts = state => state.contacts.entities;
export const getFilter = state => state.contacts.filter;
export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
  getContacts,
  getFilter,
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
