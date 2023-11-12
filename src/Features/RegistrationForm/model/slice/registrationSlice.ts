import { createSlice } from "@reduxjs/toolkit";
import { RegisterStateSchema } from "../../types/registrationStateSchema";

const initialState: RegisterStateSchema = {
    isLoading: true,
    error: null,
    data: null
}

export const registrationSlice = createSlice({
    name: 'registrationSlice',
    initialState,
    reducers: {

    },
    extraReducers: build => {

    }
})

export const { actions: registrationActions } = registrationSlice
export const { reducer: registrationReducer } = registrationSlice