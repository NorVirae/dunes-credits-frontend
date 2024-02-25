import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactionsPage: { start: 0, limit: 100, totalNoOfItems: 162, currentPage: 1 },


};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        updateTransactionPagination: (state, data: PayloadAction<{ currentPage: number, totalNoOfItems: number }>) => {
            let newCurrentPage = data.payload.currentPage - 1
            let newStart = state.transactionsPage.limit * newCurrentPage

            return {
                ...state, transactionsPage: {
                    ...state.transactionsPage,
                    totalNoOfItems: data.payload.totalNoOfItems,
                    start: newStart,
                    currentPage: data.payload.currentPage
                }
            }
        },


    },
});

export const { updateTransactionPagination } = paginationSlice.actions;



export default paginationSlice.reducer;
