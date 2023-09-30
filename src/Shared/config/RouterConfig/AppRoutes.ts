import { RouteProps } from 'react-router'

export type AppRoutesWithAuthProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  BOARD = 'board',
  ADD_RESERVE = 'addReserve',

  // 404
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.BOARD]: '/board',
  [AppRoutes.ADD_RESERVE]: '/reserve',
  [AppRoutes.NOT_FOUND]: '*'
}
