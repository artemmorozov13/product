export interface ProfileStateSchema {
  isEdit: boolean
  isLoading: boolean
  error: string | undefined
  data: ProfileType | undefined
}

export interface ProfileType {
  id: number
  userId: number
  username: string | undefined
  email: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  avatar: string | undefined
}
