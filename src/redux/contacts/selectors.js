import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';

export const selectAllContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
    )
);

export const selectLoadingStatus = state => state.contacts.isLoading;

export const selectErrorStatus = state => state.contacts.error;
