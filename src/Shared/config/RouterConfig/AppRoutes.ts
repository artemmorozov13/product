import { RouteProps } from 'react-router'

export type AppRoutesWithAuthProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  BOARD = 'board',
  ADD_RESERVE = 'addReserve',
  BOARD_BY_ID = 'boardById',
  SHARED_BOARD = 'sharedBoard',
  SHARED_BOARD_BY_ID = 'sharedBoardById',
  // 404
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.BOARD]: '/board',
  [AppRoutes.BOARD_BY_ID]: '/board/', // + :id
  [AppRoutes.SHARED_BOARD]: '/boards/', // + :userId
  [AppRoutes.SHARED_BOARD_BY_ID]: '/boards/', // + :userId/service/:id

  [AppRoutes.ADD_RESERVE]: '/reserve',
  [AppRoutes.NOT_FOUND]: '*'
}
