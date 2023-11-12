import { createSlice } from "@reduxjs/toolkit";
import { AuthStateSchema } from "../../types/authStateSchema";

const initialState: AuthStateSchema = {
    isLoading: true,
    error: null,
    data: null
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {

    },
    extraReducers: build => {

    }
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice