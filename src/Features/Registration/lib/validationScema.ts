import * as yup from 'yup'
import { IRegisterUserSchema } from '../model/services/RegisterUserByEmail/RegisterByEmail'

export const createRegistrationValidation: yup.ObjectSchema<Record<keyof IRegisterUserSchema, string>> = yup.object().shape({
  email: yup.string().email('Не валидный Email').required('Email обязателен для заполнения'),
  username: yup.string().required('Поле обязательно для заполнения'),
  fullname: yup.string().required('Поле обязательно для заполнения'),
  password: yup.string().min(8, 'Минимальная длинна пароля 8 символов').required('Поле обязательно для заполнения'),
  confirmPassword: yup.string().min(8, 'Минимальная длинна пароля 8 символов').required('Поле обязательно для заполнения')
})
