import { createSelector } from '@reduxjs/toolkit';
import { selectorContacts } from 'redux/contacts/selectors';

export const selectorFilter = state => state.filter;

export const selectorFilteredContacts = createSelector(
  selectorContacts,
  selectorFilter,
  (contacts, filter) =>
    contacts
      ? contacts.items.filter(contact =>
          contact.name.toLowerCase().includes(filter.filter.toLowerCase())
        )
      : contacts.items
);
