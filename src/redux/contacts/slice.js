import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, createContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null, filter: '' },
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(createContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addMatcher(
        isAnyOf(
          getContacts.fulfilled,
          createContact.fulfilled,
          deleteContact.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.pending,
          createContact.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.rejected,
          createContact.rejected,
          deleteContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
export const { changeFilter } = contactsSlice.actions;
