import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../contacts/operations';
import { logout } from '../auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, (state) => {
      state.error = true;
      state.loading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(addContact.pending, (state) => {
      state.error = true;
      state.loading = true;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(deleteContact.pending, (state) => {
      state.error = true;
      state.loading = true;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.items.findIndex((i) => i.id === action.payload.id);
      state.items.splice(index, 1)
    })
    .addCase(deleteContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(logout.fulfilled, (state) => {
      state.items = [];
      state.error = null;
      state.loading = false;
    }),
});

export default contactsSlice.reducer;