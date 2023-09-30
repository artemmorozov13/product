import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationFullname = (state: StateSchema) => state?.registerUserSchema?.fullname
