import { Suspense, FC, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

import { PageLoader } from 'Widgets'
import { AppRoutesWithAuthProps } from 'Shared/config/RouterConfig/AppRoutes'

import { routeConfig } from '../config/RouteConfig'
import { RequireAuth } from './RequireAuth'
import { NotAuthOnly } from './NotAuthOnly'

const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((route: AppRoutesWithAuthProps) => {
    const { path, element, authOnly, notAuthOnly } = route

    const renderElement = (
        <Suspense fallback={<PageLoader />}>
            {element}
        </Suspense>
    )

    return (
        <Route
            key={path}
            path={path}
            element={authOnly ? (
                <RequireAuth>{renderElement}</RequireAuth>
            ) : notAuthOnly ? (
                <NotAuthOnly>{renderElement}</NotAuthOnly>
            ) : renderElement} />
    )
  }, [])

  return (
      <Routes>
          {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
  )
}

export default memo(AppRouter)
