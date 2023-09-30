import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, TextInput, useAppDispatch, useTypedTranslation } from 'Shared'
import { DynamicModuleLoader } from 'Shared/lib/components/DynamicModuleLoader'
import { ReducersList } from 'Shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Text } from "Shared/ui/Text";

import { CreateUserReducer } from '../../model/slices/registerUserByEmail/RegisterUserByEmail'
import { IRegisterUserSchema, RegisterByEmail } from '../../model/services/RegisterUserByEmail/RegisterByEmail'
import { getRegistrationEmail } from '../../model/selectors/getRegistrationEmail/getRegistrationEmail'
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword/getRegistrationPassword'
import { getRegistrationLoading } from '../../model/selectors/getRegistrationLoading/getRegistrationLoading'
import { getRegistrationError } from '../../model/selectors/getRegistrationError/getRegistrationError'
import { getRegistrationUsername } from "../../model/selectors/getRegistrationUsername/getRegistrationUsername";
import { getRegistrationFullname } from "../../model/selectors/getRegistrationFullname/getRegistrationFullname";
import { getRegistrationConfirmPassword } from "../../model/selectors/getRegistrationConfirmPassword/getRegistrationConfirmPassword";
import { createRegistrationValidation } from "../../lib/validationScema";

import s from './RegistrationForm.module.scss'

const initialReducers: ReducersList = { registerUserSchema: CreateUserReducer }

interface RegistrationFormProps {
  onClose: () => void
}

const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { onClose } = props

  const dispatch = useAppDispatch()
  const { t } = useTypedTranslation("registration")
  const { control, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(createRegistrationValidation)
  })

  const email = useSelector(getRegistrationEmail)
  const username = useSelector(getRegistrationUsername)
  const fullname = useSelector(getRegistrationFullname)
  const password = useSelector(getRegistrationPassword)
  const confirmPassword = useSelector(getRegistrationConfirmPassword)
  const isLoading = useSelector(getRegistrationLoading)
  const error = useSelector(getRegistrationError)

  const handleRegister = useCallback((data: IRegisterUserSchema) => {
    dispatch(RegisterByEmail(data))
    onClose()
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
          <div className={s.form}>
              <span className={s.title}>{t('title')}</span>
              {error && <span>{error}</span>}
              <div className={s.fields}>
                  {errors.email && (
                    <Text type="error">{errors.email.message}</Text>
                  )}
                  <Controller
                    name="email"
                    control={control}
                    defaultValue={email}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        placeholder={t('email.placeholder')}
                        value={value}
                        onChange={onChange}
            />
                    )}
                  />
                  {errors.username && (
                    <Text type="error">{errors.username.message}</Text>
                  )}
                  <Controller
                    name="username"
                    control={control}
                    defaultValue={username}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        placeholder={t('username.placeholder')}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                  {errors.fullname && (
                    <Text type="error">{errors.fullname.message}</Text>
                  )}
                  <Controller
                    name="fullname"
                    control={control}
                    defaultValue={fullname}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        placeholder={t('fullname.placeholder')}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                  {errors.password && (
                    <Text type="error">{errors.password.message}</Text>
                  )}
                  <Controller
                    name="password"
                    control={control}
                    defaultValue={password}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        type='password'
                        placeholder={t('password.placeholder')}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                  {errors.confirmPassword && (
                    <Text type="error">{errors.confirmPassword.message}</Text>
                  )}
                  <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue={confirmPassword}
                    render={({ field: { value, onChange } }) => (
                      <TextInput
                        type='password'
                        placeholder={t('confirmPassword.placeholder')}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                  <Button
                      onClick={handleSubmit(handleRegister)}
                      disabled={isLoading}
                  >{t('buttonText')}</Button>
              </div>
          </div>
      </DynamicModuleLoader>
  )
})

export default RegistrationForm
