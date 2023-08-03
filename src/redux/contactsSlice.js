const { createSlice } = require('@reduxjs/toolkit');
const { initialState } = require('./initialState');

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),
    deleteContact: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    }),
    setFilter: (state, action) => ({
      ...state,
      filterText: action.payload,
    }),
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
