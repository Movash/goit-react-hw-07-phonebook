import { createSlice, nanoid } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    createContactAction: {
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer
export const { createContactAction, deleteContact } = contactsSlice.actions;