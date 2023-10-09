import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkApiType } from "App/providers/StoreProvider";
import { ManagerBoardDataType } from "../../types/managerBoardStateSchema";

interface FetchBoardDataOptions {
    userId: number
}

const errorMessage = ""

export const fetchBoardData = createAsyncThunk<ManagerBoardDataType[], FetchBoardDataOptions, ThunkApiType<string>>(
    'boardSlice/fetchBoardData',
    async (options, thunkApi) => {
        const { userId } = options
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get(`/services?userId=${userId}`)

            if (!response.data) {
                rejectWithValue(errorMessage)
            }

            return response.data
        } catch {
            rejectWithValue(errorMessage)
        }
    }
)