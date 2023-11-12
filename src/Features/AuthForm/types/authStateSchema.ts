export interface AuthFormSchema {
    email: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    passwordRepeat: string | null
}

export interface AuthStateSchema {
    isLoading: boolean
    error: string | null
    data: AuthFormSchema | null
}