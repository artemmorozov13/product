import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchBoardData } from "../services/fetchBoardData";
import { ManagerBoardDataType, ManagerBoardStateSchema } from "../../types/managerBoardStateSchema";

const initialState: ManagerBoardStateSchema = {
    data: null,
    error: null,
    isLoading: true
}

const managerBoardSlice = createSlice({
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
        builder.addCase(fetchBoardData.fulfilled, (state, action: PayloadAction<ManagerBoardDataType[]>) => {
            state.isLoading = false,
            state.error = null,
            state.data = action.payload
        })
    }
})

export const { actions: managerActions } = managerBoardSlice
export const { reducer: managerReducer } = managerBoardSlice
