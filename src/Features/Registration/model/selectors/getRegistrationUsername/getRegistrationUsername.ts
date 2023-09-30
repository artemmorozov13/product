import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationUsername = (state: StateSchema) => state?.registerUserSchema?.username || ''
