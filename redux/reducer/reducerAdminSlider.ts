import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasError: false,
    picture: '',
    publicId: '',
    isEdit: false,
    deleteAction: false,
    isDelete: false
}

type typeAction = {
    payload: {
        name: string;
        value: string;
        target: string;
        file: string;
    };
}

export const ReducerSlice = createSlice({
    name: 'northgarden',
    initialState,
    reducers: {
        handleCloseModalSlider: (state) => {
            state.picture = '',
            state.deleteAction = false
        },
        handleSelectFileChangeSlider: (state: any, action: typeAction) => {
            const { name, file } = action.payload;
            state[name] = file
        },
        handleDeleteSliderAction: (state) => {
            state.deleteAction = true
        },
        handleAddSliderSucces: (state) => {
            state.picture = '',
            state.isEdit = true
        },
        handleAddSliderError: (state) => {
            state.hasError = true
        },
        handleEditSliderSucces: (state) => {
            state.picture = '',
            state.isEdit = true
        },
        handleEditSliderError: (state) => {
            state.hasError = true
        },
        handleDeleteSliderSucces: (state) => {
            state.picture = '',
            state.publicId = '',
            state.isDelete = true,
            state.deleteAction = false
        },
        handleDeleteSliderError: (state) => {
            state.hasError = true
        }
    }
});

export const {
    handleCloseModalSlider, handleSelectFileChangeSlider, handleDeleteSliderAction, handleAddSliderSucces, handleAddSliderError, handleEditSliderSucces,
    handleEditSliderError, handleDeleteSliderSucces, handleDeleteSliderError
} = ReducerSlice.actions;

export default ReducerSlice.reducer;