import { HomePage, NotFoundPage } from 'Pages'
import { AddReservePage } from 'Pages/AddReservePage'
import { BoardPage } from 'Pages/BoardPage'
import { ProfilePage } from 'Pages/ProfilePage'

import { AppRoutes, AppRoutesWithAuthProps, RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'

export const routeConfig: Record<AppRoutes, AppRoutesWithAuthProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <HomePage />
  },
  [AppRoutes.PROFILE]: {
    path: RoutesPath.profile,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.BOARD]: {
    path: RoutesPath.board,
    element: <BoardPage />,
    authOnly: true
  },
  [AppRoutes.ADD_RESERVE]: {
    path: RoutesPath.addReserve,
    element: <AddReservePage />,
    authOnly: true
  },
  // 404
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage />
  }
}
