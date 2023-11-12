import { RouteProps } from 'react-router'

export type AppRoutesWithAuthProps = RouteProps & {
  authOnly?: boolean
  notAuthOnly?: boolean
}

export enum AppRoutes {
  // all users
  MAIN = 'main',
  BOARD_BY_ID = 'boardById',
  SHARED_BOARD = 'sharedBoard',
  SHARED_BOARD_BY_ID = 'sharedBoardById',

  // not auth only
  REGISTER = 'register',
  AUTH = 'auth',

  // auth only
  PROFILE = 'profile',
  BOARD = 'board',
  ADD_RESERVE = 'addReserve',
  RESERVATION = 'reservations',

  // 404
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.REGISTER]: '/register',
  [AppRoutes.AUTH]: '/auth',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.BOARD]: '/board',
  [AppRoutes.RESERVATION]: '/reservations',
  [AppRoutes.BOARD_BY_ID]: '/board/', // + :id
  [AppRoutes.SHARED_BOARD]: '/boards/', // + :userId
  [AppRoutes.SHARED_BOARD_BY_ID]: '/boards/', // + :userId/service/:id

  [AppRoutes.ADD_RESERVE]: '/reserve',
  [AppRoutes.NOT_FOUND]: '*'
}
