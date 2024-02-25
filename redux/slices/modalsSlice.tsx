import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
  transferModalOpen: false,
  bidModalOpen: false,
  cartModalOpen: false,
  navUserOpen: false
};

const modalsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {


    openTransferModal: (state) => {

      state.transferModalOpen = true
    },

    closeTransferModal: (state) => {
      state.transferModalOpen = false
    },


  },
});

export const {
  openTransferModal,
  closeTransferModal } = modalsSlice.actions;

export default modalsSlice.reducer;
