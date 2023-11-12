import { UserType } from "Entities/User/types/userStateSchemaType"

export interface IUser {
  email: string | null
  password: string | null
}

export interface UserLoginStateSchema {
  token: string | null
  user?: UserType
  _inited?: boolean
}
