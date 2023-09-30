import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getRegistrationConfirmPassword = (state: StateSchema) => state?.registerUserSchema?.confirmPassword || ''
