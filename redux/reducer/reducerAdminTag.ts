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
        handleCloseModalTag: (state) => {
            state.name = '',
            state.deleteAction = false
        },
        handleChangeTag: (state: any, action: typeAction) => {
            const { name, value } = action.payload;
            state[name] = value
        },
        handleDeleteTagAction: (state) => {
            state.deleteAction = true
        },
        handleAddTagSucces: (state) => {
            state.name = ''
        },
        handleAddTagError: (state) => {
            state.hasError = true
        },
        handleEditTagSucces: (state) => {
            state.name = '',
            state.isEdit = true
        },
        handleEditTagError: (state) => {
            state.hasError = true
        },
        handleDeleteTagSucces: (state) => {
            state.name = '',
            state.isDelete = true,
            state.deleteAction = false
        },
        handleDeleteTagError: (state) => {
            state.hasError = true
        }
    }
});

export const {
    handleCloseModalTag, handleChangeTag, handleDeleteTagAction, handleAddTagSucces, handleAddTagError, handleEditTagSucces, handleEditTagError, handleDeleteTagSucces, handleDeleteTagError
} = ReducerSlice.actions;

export default ReducerSlice.reducer;