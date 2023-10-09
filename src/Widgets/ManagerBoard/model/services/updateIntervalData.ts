import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkApiType } from "App/providers/StoreProvider";
import { TimeIntervalsType } from "Features/AddTimeInterval";
import { fetchBoardData } from "./fetchBoardData";

export interface UpdateIntervalOptions {
    userId: number
    serviceId: string
    body: {
        id: number
        userId: number
        date: string
        intervals: TimeIntervalsType[]
    }
    onClose: () => void
}

const errorMessage = ""

export const updateInterval = createAsyncThunk<void, UpdateIntervalOptions, ThunkApiType<string>>(
    'board/updateInterval',
    async (options, thunkApi) => {
        const { userId, serviceId, body, onClose } = options
        const { extra, rejectWithValue, dispatch } = thunkApi

        try {
            const response = await extra.api.put(`/services/${serviceId}`, body)

            if (!response.data) {
                rejectWithValue(errorMessage)
            }
            onClose()
            dispatch(fetchBoardData({ userId }))
        } catch {
            rejectWithValue(errorMessage)
        }
    }
)