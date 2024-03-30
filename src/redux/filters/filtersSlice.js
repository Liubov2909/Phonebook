import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: "",

  reducers: {
    changeFilter: {
      reduser(_, action) {
        return action.payload;
      },
      prepare(filter) {
        return { payload: filter };
      },
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;