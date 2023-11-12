import { FC, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";

import {
    Alert,
    Avatar,
    Button,
    CssBaseline,
    FormControl,
    Paper,
    TextField,
    Typography } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CircularProgress from '@mui/material/CircularProgress';

import { AuthFormSchema } from "../types/authStateSchema";
import styles from "./AuthForm.module.scss"
import { DynamicModuleLoader, ReducersList } from "Shared/lib/components/DynamicModuleLoader";
import { authReducer } from "../model/slice/authSlice";
import { postAuthUser } from "../model/services/postAuthUser";
import { useAppDispatch } from "Shared";
import { yupResolver } from "@hookform/resolvers/yup";
import { authValidationSchema } from "../lib/authValidationSchema";
import { Link } from "react-router-dom";
import { RoutesPath } from "Shared/config/RouterConfig/AppRoutes";

const reducer: ReducersList = {
    authReducer: authReducer
}

const AuthForm: FC = (props) => {
    const { t } = useTranslation("pages/auth")

    const dispatch = useAppDispatch()

    const { control, handleSubmit, formState: { errors } } = useForm<AuthFormSchema>({
        mode: "all",
        resolver: yupResolver(authValidationSchema)
    })

    const onSubmit = (data: AuthFormSchema) => {
        dispatch(postAuthUser({ body: data }))
    }

    return (
        <Suspense fallback={<CircularProgress />}>
            <DynamicModuleLoader reducers={reducer}>
                <div className={styles.main}>
                    <CssBaseline />
                    <Paper className={styles.paper}>
                        <div className={styles.container}>
                            <Avatar className={styles.avatar}>
                            <HowToRegIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                {t("title")}
                            </Typography>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                            <FormControl fullWidth>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <TextField
                                            variant="outlined"
                                            id="email"
                                            name="email"
                                            value={value}
                                            onChange={onChange}
                                            autoComplete="email"
                                            placeholder={t("email.placeholder")}
                                            autoFocus
                                        />
                                    )}
                                />
                                {errors?.email?.message && (
                                    <Alert severity="error">{errors.email.message}</Alert>
                                )}
                            </FormControl>
                            <FormControl fullWidth>
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <TextField
                                            variant="outlined"
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={value}
                                            onChange={onChange}
                                            placeholder={t("password.placeholder")}
                                        />
                                    )}
                                />
                                {errors?.password?.message && (
                                    <Alert severity="error">{errors.password.message}</Alert>
                                )}
                            </FormControl>
                            <div className={styles.needRegisterBlock}>
                                <Typography>{t("needRegister")}</Typography>
                                <Link to={RoutesPath.register} className={styles.link}>{t("register")}</Link>
                            </div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={styles.submit}
                            >{t("submit")}</Button>
                        </form>
                    </Paper>
                </div>
            </DynamicModuleLoader>
        </Suspense>
    )
}

export default AuthForm
