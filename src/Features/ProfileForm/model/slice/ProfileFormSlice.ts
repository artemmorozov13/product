import { fetchProfileData } from './../services/fetchProfileData/fetchProfileData'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ProfileStateSchema, ProfileType } from '../types/ProfileStateSchema'
import { patchProfileData } from '../services/patchProfileData/patchProfileData'

const initialState: ProfileStateSchema = {
  isEdit: false,
  isLoading: true,
  error: undefined,
  data: undefined
}

export const ProfileFormSlice = createSlice({
  name: 'profileForm',
  initialState,
  reducers: {
    setEditableMode: (state) => {
      state.isEdit = true
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<ProfileType>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(patchProfileData.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(patchProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.isEdit = false
        state.data = action.payload
      })
  }
})

export const { actions: ProfileFormActions } = ProfileFormSlice
export const { reducer: ProfileFormReducer } = ProfileFormSlice
