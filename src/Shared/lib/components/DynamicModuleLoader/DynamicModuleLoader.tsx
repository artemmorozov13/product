import { FC, ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'
import { Reducer } from 'redux'

import { ReduxStoreWithManager, StateSchemaKeys } from 'App/providers/StoreProvider/config/StateSchema'

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer
}

interface IDynamicModuleLoader {
  reducers: ReducersList
  children: ReactNode
  removeAfterUnmount?: boolean
}

type ReducerListEntry = [StateSchemaKeys, Reducer]

export const DynamicModuleLoader: FC<IDynamicModuleLoader> = (props) => {
  const { reducers, children, removeAfterUnmount = false } = props
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer)
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
          store.reducerManager.remove(name)
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return (
      <>{children}</>
  )
}
