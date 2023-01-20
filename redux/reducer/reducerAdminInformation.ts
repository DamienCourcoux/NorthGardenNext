import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasError: false,
    information: '',
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
        handleCloseModalInformation: (state) => {
            state.information = '',
            state.deleteAction = false
        },
        handleChangeInformation: (state: any, action: typeAction) => {
            const { name, value } = action.payload;
            state[name] = value
        },
        handleDeleteInformationAction: (state) => {
            state.deleteAction = true
        },
        handleAddInformationSucces: (state) => {
            state.information = ''
        },
        handleAddInformationError: (state) => {
            state.hasError = true
        },
        handleEditInformationSucces: (state) => {
            state.information = '',
            state.isEdit = true
        },
        handleEditInformationError: (state) => {
            state.hasError = true
        },
        handleDeleteInformationSucces: (state) => {
            state.information = '',
            state.isDelete = true,
            state.deleteAction = false
        },
        handleDeleteInformationError: (state) => {
            state.hasError = true
        }
    }
});

export const {
    handleCloseModalInformation, handleChangeInformation, handleDeleteInformationAction, handleAddInformationSucces, handleAddInformationError, handleEditInformationSucces, handleEditInformationError, handleDeleteInformationSucces, handleDeleteInformationError
} = ReducerSlice.actions;

export default ReducerSlice.reducer;