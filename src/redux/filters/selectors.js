import { selectContacts } from "../contacts/selectors";
import { createSelector } from '@reduxjs/toolkit'; 

export const selectFilter = state => state.filters.name;

 export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, nameFilter) => {
    if (!nameFilter.trim()) return contacts;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
       (contact.number && contact.number.includes(nameFilter))
    );
  }
);
