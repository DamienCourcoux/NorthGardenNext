import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasError: false,
    picture: '',
    name: '',
    publicId: '',
    tagsId: '',
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
        handleCloseModalPicture: (state) => {
            state.picture = '',
            state.name = '',
            state.publicId = '',
            state.tagsId = '',
            state.deleteAction = false
        },
        handleChangePicture: (state: any, action: typeAction) => {
            const { name, value } = action.payload;
            state[name] = value
        },
        handleSelectChangePicture: (state: any, action: typeAction) => {
            const { name, target } = action.payload;
            state[name] = target
        },
        handleSelectFileChangePicture: (state: any, action: typeAction) => {
            const { name, file } = action.payload;
            state[name] = file
        },
        handleDeletePictureAction: (state) => {
            state.deleteAction = true
        },
        handleAddPictureSucces: (state) => {
            state.picture = '',
            state.name = '',
            state.publicId = '',
            state.tagsId = '',
            state.isEdit = true
        },
        handleAddPictureError: (state) => {
            state.hasError = true
        },
        handleEditPictureSucces: (state) => {
            state.picture = '',
            state.name = '',
            state.publicId = '',
            state.tagsId = '',
            state.isEdit = true
        },
        handleEditPictureError: (state) => {
            state.hasError = true
        },
        handleDeletePictureSucces: (state) => {
            state.picture = '',
            state.name = '',
            state.publicId = '',
            state.tagsId = '',
            state.isDelete = true,
            state.deleteAction = false
        },
        handleDeletePictureError: (state) => {
            state.hasError = true
        }
    }
});

export const {
    handleCloseModalPicture, handleChangePicture, handleSelectChangePicture,
    handleSelectFileChangePicture, handleDeletePictureAction, handleAddPictureSucces,
    handleAddPictureError, handleEditPictureSucces, handleEditPictureError,
    handleDeletePictureSucces, handleDeletePictureError
} = ReducerSlice.actions;

export default ReducerSlice.reducer;