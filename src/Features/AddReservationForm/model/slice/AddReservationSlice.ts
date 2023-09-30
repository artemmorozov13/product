import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addTimeReserveAdapter } from "../adapters/addTimeReserveAdapter";
import { AddReservationStateSchema } from "../../types/addReservationSchema";
import { fetchTimeIntervals } from "../services/fetchTimeIntervals";
import { TimeReservationType } from "../../types/timeReservationTypes";

const initialState = addTimeReserveAdapter.getInitialState<AddReservationStateSchema>({
    isLoading: false,
    error: null,
    ids: ["1", "2"],
    entities: {}
})

export const AddReservationSlice = createSlice({
    name: "addReservationSlice",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTimeIntervals.pending, (state) => {
            state.isLoading = true
            state.error = null
        }),
        builder.addCase(fetchTimeIntervals.fulfilled, (state, action: PayloadAction<TimeReservationType[]>) => {
            state.isLoading = false,
            addTimeReserveAdapter.setAll(state, action.payload)
        }),
        builder.addCase(fetchTimeIntervals.rejected, (state, action) => {
            state.isLoading = false,
            state.error = action.error.message
        })
    },
})

export const { actions: addReservationActions } = AddReservationSlice
export const { reducer: addReservationReducer } = AddReservationSlice