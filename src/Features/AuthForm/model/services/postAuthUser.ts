import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthFormSchema } from "../../types/authStateSchema";
import { ThunkApiType } from "App/providers/StoreProvider";
import { UserType } from "Entities/User/types/userStateSchemaType";
import { UserAccessTokenKey, UserDataKey } from "Shared/consts/AppConsts";
import { UserActions } from "Entities/User";
import { RoutesPath } from "Shared/config/RouterConfig/AppRoutes";

interface PostAuthUserOptions {
    body: AuthFormSchema
}

interface AuthUserResponse {
    token: string
    user: UserType
}

export const postAuthUser = createAsyncThunk<AuthFormSchema, PostAuthUserOptions, ThunkApiType<string>>(
    "auth/postAuthUser",
    async (options, thunkApi) => {
        const { body } = options
        const { extra, rejectWithValue, dispatch } = thunkApi

        try {
            const response = await extra.api.post<AuthUserResponse>("/auth/login", body)

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
            return rejectWithValue(error.message)
        }
    }
)