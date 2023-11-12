import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserStateSchemaType } from '../../types/userStateSchemaType'
import { UserAccessTokenKey, UserDataKey } from 'Shared/consts/AppConsts'
import { UserLoginStateSchema } from 'Shared/types/RegistrationAutorizationTypes'

const initialState: UserStateSchemaType = {
  token: null,
  user: null,
  _inited: false
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth: (state, actions: PayloadAction<UserLoginStateSchema>) => {
      state.token = actions.payload.token
      state.user = actions.payload.user
    },
    initUserAuth: (state) => {
      const token = localStorage.getItem(UserAccessTokenKey)
      const user = localStorage.getItem(UserDataKey)

      if (user) {
        state.token = token
        state.user = JSON.parse(user)
      }
      state._inited = true
    },
    logoutUser: (state) => {
      state.token = null
      state.user = null

      localStorage.removeItem(UserAccessTokenKey)
      localStorage.removeItem(UserDataKey)
    }
  }
})

export const { reducer: UserReducer } = UserSlice
export const { actions: UserActions } = UserSlice
