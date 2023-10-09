import { HomePage, NotFoundPage } from 'Pages'
import { AddReservePage } from 'Pages/AddReservePage'
import { BoardByIdPage } from 'Pages/BoardByIdPage'
import { BoardPage } from 'Pages/BoardPage'
import { ProfilePage } from 'Pages/ProfilePage'
import { SharedBoardByIdPage } from 'Pages/SharedBoardByIdPage'
import { SharedBoard } from 'Pages/SharedBoardPage'

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
  [AppRoutes.BOARD_BY_ID]: {
    path: RoutesPath.boardById + ':id',
    element: <BoardByIdPage />,
    authOnly: true
  },
  [AppRoutes.SHARED_BOARD]: {
    path: RoutesPath.sharedBoard + ':userId',
    element: <SharedBoard />
  },
  [AppRoutes.SHARED_BOARD_BY_ID]: {
    path: RoutesPath.sharedBoardById + ':userId/service/:id',
    element: <SharedBoardByIdPage />
  },
  // 404
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.not_found,
    element: <NotFoundPage />
  }
}
