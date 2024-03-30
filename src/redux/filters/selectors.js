import { selectContacts } from "../contacts/selectors";
import { createSelector } from '@reduxjs/toolkit'; 

export const selectFilter = state => state.filters;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filters, contacts) => {
    const { items } = contacts;
    const filter = filters.toLowerCase();

    return items.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter) ||
        contact.phone.toLowerCase().includes(filter)
    );
  }
);
