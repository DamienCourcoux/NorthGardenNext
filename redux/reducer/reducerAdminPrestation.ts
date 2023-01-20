import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasError: false,
    name: '',
    description: '',
    mowing: '',
    hedgeTrimmer: '',
    bushPruning: '',
    weeding: '',
    brushCutter: '',
    planting: '',
    tarpaulin: '',
    mulching: '',
    planters: '',
    aromaticSeasonalFlower: '',
    soil: '',
    fertilizer: '',
    composition: '',
    brushing: '',
    washing: '',
    photo: '',
    blower: '',
    pickup: '',
    gifts: '',
    example: '',
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
        name: any;
        target: any;
    };
}

export const ReducerSlice = createSlice({
    name: 'northgarden',
    initialState,
    reducers: {
        handleCloseModalPrestation: (state) => {
            state.name = '',
            state.description = '',
            state.mowing = '',
            state.hedgeTrimmer = '',
            state.bushPruning = '',
            state.weeding = '',
            state.brushCutter = '',
            state.planting = '',
            state.tarpaulin = '',
            state.mulching = '',
            state.planters = '',
            state.aromaticSeasonalFlower = '',
            state.soil = '',
            state.fertilizer = '',
            state.composition = '',
            state.brushing = '',
            state.washing = '',
            state.photo = '',
            state.blower = '',
            state.pickup = '',
            state.gifts = '',
            state.example = '',
            state.price = 1,
            state.packsId = '',
            state.deleteAction = false
        },
        handleChangePrestation: (state: any, action: handleChange) => {
            const { name, value } = action.payload;
            state[name] = value
        },
        handleSelectChangePrestation: (state: any, action: handleSelectChange) => {
            const { name, target } = action.payload;
            state[name] = target
        },
        handleDeletePrestationAction: (state) => {
            state.deleteAction = true
        },
        handleAddPrestationSucces: (state) => {
            state.name = '',
            state.description = '',
            state.mowing = '',
            state.hedgeTrimmer = '',
            state.bushPruning = '',
            state.weeding = '',
            state.brushCutter = '',
            state.planting = '',
            state.tarpaulin = '',
            state.mulching = '',
            state.planters = '',
            state.aromaticSeasonalFlower = '',
            state.soil = '',
            state.fertilizer = '',
            state.composition = '',
            state.brushing = '',
            state.washing = '',
            state.photo = '',
            state.blower = '',
            state.pickup = '',
            state.gifts = '',
            state.example = '',
            state.price = 1
        },
        handleAddPrestationError: (state) => {
            state.hasError = true
        },
        handleEditPrestationSucces: (state) => {
            state.name = '',
            state.description = '',
            state.mowing = '',
            state.hedgeTrimmer = '',
            state.bushPruning = '',
            state.weeding = '',
            state.brushCutter = '',
            state.planting = '',
            state.tarpaulin = '',
            state.mulching = '',
            state.planters = '',
            state.aromaticSeasonalFlower = '',
            state.soil = '',
            state.fertilizer = '',
            state.composition = '',
            state.brushing = '',
            state.washing = '',
            state.photo = '',
            state.blower = '',
            state.pickup = '',
            state.gifts = '',
            state.example = '',
            state.price = 1,
            state.packsId = '',
            state.isEdit = true
        },
        handleEditPrestationError: (state) => {
            state.hasError = true
        },
        handleDeletePrestationSucces: (state) => {
            state.name = '',
            state.description = '',
            state.mowing = '',
            state.hedgeTrimmer = '',
            state.bushPruning = '',
            state.weeding = '',
            state.brushCutter = '',
            state.planting = '',
            state.tarpaulin = '',
            state.mulching = '',
            state.planters = '',
            state.aromaticSeasonalFlower = '',
            state.soil = '',
            state.fertilizer = '',
            state.composition = '',
            state.brushing = '',
            state.washing = '',
            state.photo = '',
            state.blower = '',
            state.pickup = '',
            state.gifts = '',
            state.example = '',
            state.price = 1,
            state.packsId = '',
            state.isDelete = true,
            state.deleteAction = false
        },
        handleDeletePrestationError: (state) => {
            state.hasError = true
        }
    }
});

export const {
    handleCloseModalPrestation, handleChangePrestation, handleSelectChangePrestation, handleDeletePrestationAction, handleAddPrestationSucces, handleAddPrestationError, handleEditPrestationSucces, handleEditPrestationError, handleDeletePrestationSucces, handleDeletePrestationError
} = ReducerSlice.actions;

export default ReducerSlice.reducer;