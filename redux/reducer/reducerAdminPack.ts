import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasError: false,
    name: '',
    isEdit: false,
    deleteAction: false,
    isDelete: false
}

type typeAction = {
    payload: {
        name: string;
        value: string;
    };
}

export const ReducerSlice = createSlice({
    name: 'northgarden',
    initialState,
    reducers: {
        handleCloseModalPack: (state) => {
            state.name = '',
            state.deleteAction = false
        },
        handleChangePack: (state: any, action: typeAction) => {
            const { name, value } = action.payload;
            state[name] = value
        },
        handleDeletePackAction: (state) => {
            state.deleteAction = true
        },
        handleAddPackSucces: (state) => {
            state.name = ''
        },
        handleAddPackError: (state) => {
            state.hasError = true
        },
        handleEditPackSucces: (state) => {
            state.name = '',
            state.isEdit = true
        },
        handleEditPackError: (state) => {
            state.hasError = true
        },
        handleDeletePackSucces: (state) => {
            state.name = '',
            state.isDelete = true,
            state.deleteAction = false
        },
        handleDeletePackError: (state) => {
            state.hasError = true
        }
    }
});

export const {
    handleCloseModalPack, handleChangePack, handleDeletePackAction, handleAddPackSucces, handleAddPackError, handleEditPackSucces, handleEditPackError, handleDeletePackSucces, handleDeletePackError
} = ReducerSlice.actions;

export default ReducerSlice.reducer;