import i18next from 'i18next'
import { RoutesPath } from 'Shared/config/RouterConfig/AppRoutes'
import HomeIcon from '@mui/icons-material/Home'
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PersonIcon from '@mui/icons-material/Person'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import { ReactNode } from 'react'

export interface SidebarNavigationItemSchema {
  icon: ReactNode
  route: string
  text: string
  authOnly?: boolean
}

interface SidebarNavigationSchema {
  // Home: SidebarNavigationItemSchema
  Reservations: SidebarNavigationItemSchema
  Profile: SidebarNavigationItemSchema
  Board: SidebarNavigationItemSchema
  AddReserve: SidebarNavigationItemSchema
}

type SidebarNavigationSchemaKeys = keyof SidebarNavigationSchema

export const primarySidebar: Record<SidebarNavigationSchemaKeys, SidebarNavigationItemSchema> = {
  // Home: {
  //   icon: <HomeIcon />,
  //   route: RoutesPath.main,
  //   text: "Профиль" 
  // },
  Profile: {  
    icon: <PersonIcon />,
    route: RoutesPath.profile,
    text: "Профиль",
    authOnly: true
  },
  Board: {
    icon: <DashboardIcon />,
    route: RoutesPath.board,
    text: "Доска записи",
    authOnly: true
  },
  Reservations: {
    icon: <BookOnlineIcon />,
    route: "/reservations",
    text: "Записи клиентлв",
    authOnly: true
  },
  AddReserve: {
    icon: <BookmarkAddIcon />,
    route: RoutesPath.addReserve,
    text: "Создать запись",
    authOnly: true
  }
}

// export const secondarySidebar: Record<SidebarNavigationSchemaKeys, SidebarNavigationItemSchema> = {
//   // Home: {
//   //   icon: <HomeIcon />,
//   //   route: RoutesPath.main,
//   //   text: i18next.t('widget_sidebar_navigation_text_home')
//   // },
//   Profile: {
//     icon: <PersonIcon />,
//     route: RoutesPath.profile,
//     text: i18next.t('widget_sidebar_navigation_text_profile'),
//     authOnly: true
//   },
//   Board: {
//     icon: <DashboardIcon />,
//     route: RoutesPath.board,
//     text: i18next.t('widget_sidebar_navigation_text_board'),
//     authOnly: true
//   },
//   AddReserve: {
//     icon: <BookmarkAddIcon />,
//     route: RoutesPath.addReserve,
//     text: i18next.t('widget_sidebar_navigation_text_reserve'),
//     authOnly: true
//   }
// }
