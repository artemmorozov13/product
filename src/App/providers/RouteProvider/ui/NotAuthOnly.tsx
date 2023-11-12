import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import { useAuth } from 'Shared/lib/hooks/useAuth'
import { Navigate, useLocation } from 'react-router'

interface NotAuthOnlyProps {
  children: JSX.Element
}

export const NotAuthOnly = (props: NotAuthOnlyProps) => {
  const { children } = props
  const isAuth = useAuth()
  const location = useLocation()

  if (isAuth) {
    return <Navigate to={RoutesPath.profile} state={{ form: location }} replace />
  }

  return children
}
