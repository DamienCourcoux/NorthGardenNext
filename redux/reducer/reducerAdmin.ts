import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goToAdmin: false,
    emailConnexion: '',
    passwordConnexion: '',
    adminPseudo: '',
    adminEmail: '',
    isLogged: false,
    hasError: false,
    errorMessage: '',
}

type ReduxState = {
    goToAdmin: boolean;
    emailConnexion: string;
    passwordConnexion: string;
    adminPseudo: string;
    adminEmail: string;
    isLogged: boolean;
    hasError: boolean;
    errorMessage: string;
}

type handleChange = {
    payload: {
        name: string;
        value: string;
    }
}

type handleSigninSucess = {
    payload: {
        pseudo: string;
        email: string;
    }
}

type handleSigninError = {
    payload: {
        error: string;
    }
}

export const ReducerSlice = createSlice({
    name: 'northgarden',
    initialState,
    reducers: {
        goToAdmin: (state) => {
            state.goToAdmin = true
        },
        createHandleChange: (state: ReduxState | any, action: handleChange) => {
            const { name, value } = action.payload;
            state[name] = value
        },
        handleSigninSucess: (state, action: handleSigninSucess) => {
            state.adminPseudo = action.payload.pseudo,
            state.adminEmail = action.payload.email,
            state.emailConnexion = '',
            state.passwordConnexion = '',
            state.isLogged = true,
            state.hasError = false,
            state.errorMessage = ''
        },
        handleSigninError: (state, action: handleSigninError) => {
            state.hasError = true,
            state.errorMessage = action.payload.error
        },
        createHandleLogout: (state) => {
            sessionStorage.clear();
            state.goToAdmin = false
        }
    }
});

export const {
    goToAdmin, createHandleChange, handleSigninSucess,
    handleSigninError, createHandleLogout
} = ReducerSlice.actions;

export default ReducerSlice.reducer;