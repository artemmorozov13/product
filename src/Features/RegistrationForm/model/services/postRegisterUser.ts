import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterFormSchema } from "../../types/registrationStateSchema";
import { ThunkApiType } from "App/providers/StoreProvider";
import { UserType } from "Entities/User/types/userStateSchemaType";
import { UserAccessTokenKey, UserDataKey } from "Shared/consts/AppConsts";
import { UserActions } from "Entities/User";
import { RoutesPath } from "Shared/config/RouterConfig/AppRoutes";

interface PostRegisterUserOptions {
    body: RegisterFormSchema
}

interface RegisterUserResponse {
    token: string
    user: UserType
}

export const postRegisterUser = createAsyncThunk<RegisterFormSchema, PostRegisterUserOptions, ThunkApiType<string>>(
    "register/postRegisterUser",
    async (options, thunkApi) => {
        const { body } = options
        const { extra, rejectWithValue, dispatch } = thunkApi

        try {
            const response = await extra.api.post<RegisterUserResponse>("/auth/registration", body)

            if (!response) {
                throw new Error("Ошибка при создании пользователя")
            }

            const { token, user } = response.data

            localStorage.setItem(UserAccessTokenKey, token)
            localStorage.setItem(UserDataKey, JSON.stringify(user))

            dispatch(UserActions.setUserAuth({ token, user}))

            extra.navigate(RoutesPath.main, { replace: true })

            return body
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.message)
        }
    }
)