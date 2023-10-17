import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "api/contacts.api";

export const getAllContacts = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  contactData => addContact(contactData)
);

export const removeContact = createAsyncThunk('contacts/deleteContact', id =>
  deleteContact(id)
);