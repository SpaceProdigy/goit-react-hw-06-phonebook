import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const { createSlice } = require('@reduxjs/toolkit');
const { stateContacts } = require('./initialState');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: stateContacts,
  reducers: {
    addContact: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),
    deleteContact: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    }),
  },
});

const persistConfigContacts = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfigContacts,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
