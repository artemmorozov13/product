import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import { useAuth } from 'Shared/lib/hooks/useAuth'
import { Navigate, useLocation } from 'react-router'

interface IRequireAuthProps {
  children: JSX.Element
}

export const RequireAuth = (props: IRequireAuthProps) => {
  const { children } = props
  const isAuth = useAuth()
  const location = useLocation()

  if (!isAuth) {
    return <Navigate to={RoutesPath.auth} state={{ form: location }} replace />
  }

  return children
}
