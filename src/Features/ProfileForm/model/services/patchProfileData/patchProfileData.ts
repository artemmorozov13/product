import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiType } from 'App/providers/StoreProvider/config/StateSchema'

import { ProfileType } from '../../types/ProfileStateSchema'

const errorMessage = ''

interface ProfileOptions {
  profileId: number
  data: ProfileType
}

export const patchProfileData = createAsyncThunk<ProfileType, ProfileOptions, ThunkApiType<string>>(
  'profile/patchProfileData',
  async (options, thunkApi) => {
    const { data, profileId } = options
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.patch(`/profiles/${profileId}`, data)

      if (!response.data) {
        return rejectWithValue(errorMessage)
      }

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  })
