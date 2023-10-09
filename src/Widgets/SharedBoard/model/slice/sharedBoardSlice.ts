import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchBoardData } from "../services/fetchBoardData";
import { SharedBoardDataType, SharedBoardStateSchema } from "../../types/sharedBoardStateSchema";

const initialState: SharedBoardStateSchema = {
    data: null,
    error: null,
    isLoading: true
}

const sharedBoardSlice = createSlice({
    name: "managerSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBoardData.pending, (state) => {
            state.isLoading = true,
            state.error = null
        }),
        builder.addCase(fetchBoardData.rejected, (state) => {
            state.isLoading = false,
            state.error = null
        }),
        builder.addCase(fetchBoardData.fulfilled, (state, action: PayloadAction<SharedBoardDataType[]>) => {
            state.isLoading = false,
            state.error = null,
            state.data = action.payload
        })
    }
})

export const { actions: sharedActions } = sharedBoardSlice
export const { reducer: sharedReducer } = sharedBoardSlice
