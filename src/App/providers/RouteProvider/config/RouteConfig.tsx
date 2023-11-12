import { HomePage, NotFoundPage } from 'Pages'
import { AddReservePage } from 'Pages/AddReservePage'
import { AuthPage } from 'Pages/AuthPage'
import { BoardByIdPage } from 'Pages/BoardByIdPage'
import { BoardPage } from 'Pages/BoardPage'
import { ProfilePage } from 'Pages/ProfilePage'
import { RegisterPage } from 'Pages/RegisterPage'
import ReservationPage from 'Pages/ReservationPage/ui/ReservationPage'
import { SharedBoardByIdPage } from 'Pages/SharedBoardByIdPage'
import { SharedBoard } from 'Pages/SharedBoardPage'

import { AppRoutes, AppRoutesWithAuthProps, RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'

export const routeConfig: Record<AppRoutes, AppRoutesWithAuthProps> = {
  // all usrs
  [AppRoutes.SHARED_BOARD]: {
    path: RoutesPath.sharedBoard + ':userId',
    element: <SharedBoard />
  },
  [AppRoutes.SHARED_BOARD_BY_ID]: {
    path: RoutesPath.sharedBoardById + ':userId/service/:id',
    element: <SharedBoardByIdPage />
  },

  // not auth only
  [AppRoutes.REGISTER]: {
    path: RoutesPath.register,
    element: <RegisterPage />,
    notAuthOnly: true
  },
  [AppRoutes.AUTH]: {
    path: RoutesPath.auth,
    element: <AuthPage />,
    notAuthOnly: true
  },

  // auth only
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <HomePage />,
    authOnly: true
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
  [AppRoutes.RESERVATION]: {
    path: RoutesPath.reservations,
    element: <ReservationPage />,
    authOnly: true
  },
  [AppRoutes.ADD_RESERVE]: {
    path: RoutesPath.addReserve,
    element: <AddReservePage />,
    authOnly: true
  },
  [AppRoutes.BOARD_BY_ID]: {
    path: RoutesPath.boardById + ':id',
    element: <BoardByIdPage />,
    authOnly: true
  },
  // 404
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage />
  }
}
