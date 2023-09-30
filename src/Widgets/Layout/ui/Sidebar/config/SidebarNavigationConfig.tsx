import i18next from 'i18next'
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { ReactNode } from 'react'

interface ISidebarNavigationItemSchema {
  icon: ReactNode
  route: string
  text: string
  authOnly?: boolean
}

interface ISidebarNavigationSchema {
  Home: ISidebarNavigationItemSchema
  Profile: ISidebarNavigationItemSchema
  Board: ISidebarNavigationItemSchema
  AddReserve: ISidebarNavigationItemSchema
}

type ISidebarNavigationSchemaKeys = keyof ISidebarNavigationSchema

export const SidebarNavigationSchema: Record<ISidebarNavigationSchemaKeys, ISidebarNavigationItemSchema> = {
  Home: {
    icon: <HomeIcon />,
    route: RoutesPath.main,
    text: i18next.t('widget_sidebar_navigation_text_home')
  },
  Profile: {
    icon: <PersonIcon />,
    route: RoutesPath.profile,
    text: i18next.t('widget_sidebar_navigation_text_profile'),
    authOnly: true
  },
  Board: {
    icon: <DashboardIcon />,
    route: RoutesPath.board,
    text: i18next.t('widget_sidebar_navigation_text_board'),
    authOnly: true
  },
  AddReserve: {
    icon: <BookmarkAddIcon />,
    route: RoutesPath.addReserve,
    text: i18next.t('widget_sidebar_navigation_text_reserve'),
    authOnly: true
  }
}
