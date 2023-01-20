import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasError: false,
    lastname: '',
    firstname: '',
    email: '',
    telephone: 0,
    city: '',
    zipCode: 0,
    desiredService: '',
    details: '',
    isEdit: false,
    deleteAction: false,
    isDelete: false
}

type handleChange = {
    payload: {
        name: string;
        value: string;
    };
}

type handleSelectChange = {
    payload: {
        name: string;
        target: string;
    };
}

export const ReducerSlice = createSlice({
    name: 'northgarden',
    initialState,
    reducers: {
        handleCloseModalClient: (state) => {
            state.lastname = '',
            state.firstname = '',
            state.email = '',
            state.telephone = 0,
            state.city = '',
            state.zipCode = 0,
            state.desiredService = '',
            state.details = '',
            state.deleteAction = false
        },
        handleChangeClient: (state: any, action: handleChange) => {
            const { name, value } = action.payload;
            state[name] = value
        },
        handleSelectChangeClient: (state: any, action: handleSelectChange) => {
            const { name, target } = action.payload;
            state[name] = target
        },
        handleTextareaChangeClient: (state: any, action: handleChange) => {
            const { name, value } = action.payload;
            state[name] = value
        },
        handleDeleteClientAction: (state) => {
            state.deleteAction = true
        },
        handleAddClientSucces: (state) => {
            state.lastname = '',
            state.firstname = '',
            state.email = '',
            state.telephone = 0,
            state.city = '',
            state.zipCode = 0,
            state.desiredService = '',
            state.details = ''
        },
        handleAddClientError: (state) => {
            state.hasError = true
        },
        handleEditClientSucces: (state) => {
            state.lastname = '',
            state.firstname = '',
            state.email = '',
            state.telephone = 0,
            state.city = '',
            state.zipCode = 0,
            state.desiredService = '',
            state.details = '',
            state.isEdit = true
        },
        handleEditClientError: (state) => {
            state.hasError = true
        },
        handleDeleteClientSucces: (state) => {
            state.lastname = '',
            state.firstname = '',
            state.email = '',
            state.telephone = 0,
            state.city = '',
            state.zipCode = 0,
            state.desiredService = '',
            state.details = '',
            state.isDelete = true,
            state.deleteAction = false
        },
        handleDeleteClientError: (state) => {
            state.hasError = true
        }
    }
});

export const {
    handleCloseModalClient, handleChangeClient, handleSelectChangeClient,
    handleTextareaChangeClient, handleDeleteClientAction, handleAddClientSucces,
    handleAddClientError, handleEditClientSucces, handleEditClientError,
    handleDeleteClientSucces, handleDeleteClientError
} = ReducerSlice.actions;

export default ReducerSlice.reducer;