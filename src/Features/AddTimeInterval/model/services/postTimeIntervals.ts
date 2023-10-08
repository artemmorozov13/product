import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiType } from 'App/providers/StoreProvider'
import { TimeIntervalsPostData } from '../../types/requestTypes'
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'

export interface PostTimeIntervalsOptions {
  userId: number
  data: TimeIntervalsPostData
}

const errorMessage = ''

export const postTimeIntervals = createAsyncThunk<void, PostTimeIntervalsOptions, ThunkApiType<string>>(
  'timeIntervals/postTimeIntervals',
  async (options, thunkApi) => {
    const { userId, data: { date, intervals } } = options
    const { extra, rejectWithValue } = thunkApi

    try {
      const body = {
        userId,
        date,
        intervals
      }
      const response = await extra.api.post(`/services?userId=${userId}`, body)

      if (!response.data) {
        rejectWithValue(errorMessage)
      }

      extra.navigate(RoutesPath.board, { replace: true })
    } catch (err) {
      rejectWithValue(errorMessage)
    }
  }
)
