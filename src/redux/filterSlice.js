import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
const { createSlice } = require('@reduxjs/toolkit');
const { stateFilter } = require('./initialState');

const filterSlice = createSlice({
  name: 'filter',
  initialState: stateFilter,
  reducers: {
    setFilter: (state, action) => ({
      ...state,
      filterText: action.payload,
    }),
  },
});

const persistConfigFilter = {
  key: 'filter',
  storage,
  whitelist: ['filterText'],
};

export const filterReducer = persistReducer(
  persistConfigFilter,
  filterSlice.reducer
);

export const { setFilter } = filterSlice.actions;
