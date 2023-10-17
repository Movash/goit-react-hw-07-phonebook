import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';
import { appReducer } from './appState/slice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  appState: appReducer,
});
