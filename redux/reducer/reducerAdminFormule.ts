import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasError: false,
    name: '',
    description: '',
    price: 1,
    packsId: '',
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
        handleCloseModalFormule: (state) => {
            state.name = '',
            state.description = '',
            state.price = 1,
            state.packsId = '',
            state.deleteAction = false
        },
        handleChangeFormule: (state: any, action: handleChange) => {
            const { name, value } = action.payload;
            state[name] = value
        },
        handleSelectChangeFormule: (state: any, action: handleSelectChange) => {
            const { name, target } = action.payload;
            state[name] = target
        },
        handleDeleteFormuleAction: (state) => {
            state.deleteAction = true
        },
        handleAddFormuleSucces: (state) => {
            state.name = '',
            state.description = '',
            state.price = 1
        },
        handleAddFormuleError: (state) => {
            state.hasError = true
        },
        handleEditFormuleSucces: (state) => {
            state.name = '',
            state.description = '',
            state.price = 1,
            state.packsId = '',
            state.isEdit = true
        },
        handleEditFormuleError: (state) => {
            state.hasError = true
        },
        handleDeleteFormuleSucces: (state) => {
            state.name = '',
            state.description = '',
            state.price = 1,
            state.packsId = '',
            state.isDelete = true,
            state.deleteAction = false
        },
        handleDeleteFormuleError: (state) => {
            state.hasError = true
        }
    }
});

export const {
    handleCloseModalFormule, handleChangeFormule, handleSelectChangeFormule, handleDeleteFormuleAction, handleAddFormuleSucces, handleAddFormuleError, handleEditFormuleSucces, handleEditFormuleError, handleDeleteFormuleSucces, handleDeleteFormuleError
} = ReducerSlice.actions;

export default ReducerSlice.reducer;