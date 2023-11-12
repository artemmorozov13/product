import { EnhancedStore } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { CounterSchema } from 'Entities'
import { NavigateOptions, To } from 'react-router-dom'
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from 'redux'
import { createReduxStore } from './store'
import { UserStateSchemaType } from 'Entities/User'
import { RegisterStateSchema } from 'Features/RegistrationForm'
import { AuthFormSchema } from 'Features/AuthForm'

export interface StateSchema {
  counter: CounterSchema
  userStateSchema: UserStateSchemaType

  // async
  registerReducer?: RegisterStateSchema
  authReducer?: AuthFormSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: StateSchemaKeys) => void
}

interface ThunkExtraArgs {
  api: AxiosInstance
  navigate: (to: To, options: NavigateOptions) => void
}

export interface ThunkApiType<T> {
  rejectValue: T
  extra: ThunkExtraArgs
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
