import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkApiType } from "App/providers/StoreProvider/config/StateSchema";
import { TimeReservationType } from "../../types/timeReservationTypes";

const errorMessage = ""

export const fetchTimeIntervals = createAsyncThunk<TimeReservationType[], number, ThunkApiType<string>>(
    "addReservation/fetchTimeIntervals",
    async (userId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        if (userId) {
            rejectWithValue(errorMessage)
        }

        try {
            const response = await extra.api.get(`/timeintervals?userId=${userId}`)

            if (!response.data) {
                rejectWithValue(errorMessage)
            }

            return response.data
        } catch {
            rejectWithValue(errorMessage)
        }
    }
)