export interface RegisterFormSchema {
    email: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    passwordRepeat: string | null
}

export interface RegisterStateSchema {
    isLoading: boolean
    error: string | null
    data: RegisterFormSchema | null
}