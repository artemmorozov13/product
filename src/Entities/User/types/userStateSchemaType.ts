export interface UserType {
    id: number
    email: string
    username: string
    firstName: string
    lastName: string
}

export interface UserStateSchemaType {
    user: UserType | null
    token: string | null
    _inited: boolean
}