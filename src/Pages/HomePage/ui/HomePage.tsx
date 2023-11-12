import { RoutesPath } from "Shared/config/RouterConfig/AppRoutes"
import { Navigate, useLocation } from "react-router-dom"

const HomePage: React.FC = () => {
  const location = useLocation()

  return (
    <Navigate to={RoutesPath.profile} state={{ form: location }} replace />
  )
}

export default HomePage
