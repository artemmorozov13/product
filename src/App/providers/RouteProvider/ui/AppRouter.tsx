import { Suspense, FC, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

import { PageLoader } from 'Widgets'
import { AppRoutesWithAuthProps } from 'Shared/config/RouterConfig/AppRoutes'

import { routeConfig } from '../config/RouteConfig'
import { RequireAuth } from './RequireAuth'

const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((route: AppRoutesWithAuthProps) => {
    const { path, element, authOnly } = route

    const renderElement = (
        <Suspense fallback={<PageLoader />}>
            {element}
        </Suspense>
    )

    return (
        <Route
            key={path}
            path={path}
            element={authOnly ? <RequireAuth>{renderElement}</RequireAuth> : renderElement} />
    )
  }, [])

  return (
      <Routes>
          {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
  )
}

export default memo(AppRouter)
