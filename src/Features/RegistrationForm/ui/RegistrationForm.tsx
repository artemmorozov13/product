import { FC, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";

import {
    Alert,
    Avatar,
    Box,
    Button,
    CssBaseline,
    FormControl,
    Grid,
    Paper,
    TextField,
    Typography } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CircularProgress from '@mui/material/CircularProgress';

import { RegisterFormSchema } from "../types/registrationStateSchema";
import styles from "./RegistrationForm.module.scss"
import { DynamicModuleLoader, ReducersList } from "Shared/lib/components/DynamicModuleLoader";
import { registrationReducer } from "../model/slice/registrationSlice";
import { postRegisterUser } from "../model/services/postRegisterUser";
import { useAppDispatch } from "Shared";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationSchema } from "../lib/registerValidationSchema";
import { Link } from "react-router-dom";
import { RoutesPath } from "Shared/config/RouterConfig/AppRoutes";

const reducer: ReducersList = {
    registerReducer: registrationReducer
}

const RegistrationForm: FC = (props) => {
    const {  } = props

    const { t } = useTranslation("pages/registration")

    const dispatch = useAppDispatch()

    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormSchema>({
        mode: "all",
        resolver: yupResolver(registerValidationSchema)
    })

    const onSubmit = (data: RegisterFormSchema) => {
        dispatch(postRegisterUser({ body: data }))
    }

    console.log(errors)

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
                                    name="username"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <TextField
                                            variant="outlined"
                                            id="username"
                                            name="username"
                                            value={value}
                                            onChange={onChange}
                                            autoComplete="username"
                                            placeholder={t("username.placeholder")}
                                        />
                                    )}
                                />
                                {errors?.username?.message && (
                                    <Alert severity="error">{errors.username.message}</Alert>
                                )}
                            </FormControl>
                            <div className={styles.flex}>
                                <FormControl fullWidth>
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <TextField
                                                variant="outlined"
                                                id="firstName"
                                                name="firstName"
                                                value={value}
                                                onChange={onChange}
                                                autoComplete="firstName"
                                                placeholder={t("firstName.placeholder")}
                                            />
                                        )}
                                    />
                                    {errors?.firstName?.message && (
                                        <Alert severity="error">{errors.firstName.message}</Alert>
                                    )}
                                </FormControl>
                                <FormControl fullWidth>
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <TextField
                                                variant="outlined"
                                                id="lastName"
                                                name="lastName"
                                                value={value}
                                                onChange={onChange}
                                                autoComplete="lastName"
                                                placeholder={t("lastName.placeholder")}
                                            />
                                        )}
                                    />
                                    {errors?.lastName?.message && (
                                        <Alert severity="error">{errors.lastName.message}</Alert>
                                    )}
                                </FormControl>
                            </div>
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
                            <FormControl fullWidth>
                                <Controller
                                    name="passwordRepeat"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <TextField
                                            variant="outlined"
                                            id="passwordRepeat"
                                            name="passwordRepeat"
                                            type="password"
                                            value={value}
                                            onChange={onChange}
                                            placeholder={t("passwordRepeat.placeholder")}
                                        />
                                    )}
                                />
                                {errors?.passwordRepeat?.message && (
                                    <Alert severity="error">{errors.passwordRepeat.message}</Alert>
                                )}
                            </FormControl>
                            <div className={styles.alreadyLoginBlock}>
                                <Typography>{t("alreadyRegister")}</Typography>
                                <Link to={RoutesPath.auth} className={styles.link}>{t("login")}</Link>
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

export default RegistrationForm
