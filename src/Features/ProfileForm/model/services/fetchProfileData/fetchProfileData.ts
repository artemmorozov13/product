import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProfileType } from '../../types/ProfileStateSchema'
import { ThunkApiType } from 'App/providers/StoreProvider/config/StateSchema'

const errorMessage = ''

export const fetchProfileData = createAsyncThunk<ProfileType, number, ThunkApiType<string>>(
  'profile/fetchProfileData',
  async (userId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.get<ProfileType[]>(`/profiles?userId=${userId}`)

      if (!response.data) {
        rejectWithValue(errorMessage)
      }

      return response.data[0]
    } catch {
      return rejectWithValue(errorMessage)
    }
  })
