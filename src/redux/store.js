import { configureStore } from '@reduxjs/toolkit';
import contactsReducer  from './contacts/contactsSlice';
import filtersReducer  from './filters/filtersSlice';
import authReducer from './auth/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },  
});

export default store;

