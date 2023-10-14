import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'api/contacts.api';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

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

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addNewContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(el => el.id !== payload);
      })
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
