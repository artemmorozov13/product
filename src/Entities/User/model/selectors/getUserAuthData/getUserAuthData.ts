import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getUserAuthData = (state: StateSchema) => state.userStateSchema.user

export const getUserId = (state: StateSchema) => state.userStateSchema.user.id
