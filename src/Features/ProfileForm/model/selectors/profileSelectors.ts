import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema'

export const getProfileData = (state: StateSchema) => state?.profileFormSchema?.data

export const getProfileIsEdit = (state: StateSchema) => state?.profileFormSchema?.isEdit

export const getProfileAvatar = (state: StateSchema) => state?.profileFormSchema?.data?.avatar || undefined
