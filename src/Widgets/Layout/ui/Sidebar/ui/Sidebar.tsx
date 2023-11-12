import { FC, MouseEventHandler, memo } from 'react'

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import styles from './Sidebar.module.scss'
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useTheme } from '@mui/material'
import { SidebarNavigationItemSchema, primarySidebar } from '../config/SidebarNavigationConfig';
import { Link } from 'react-router-dom';

interface SidebarProps {
  open: boolean
  onClose: MouseEventHandler
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const { open, onClose } = props

  const theme = useTheme();

  return (
    <Drawer
      className={`${styles.drawer} ${styles.paper}`}
      variant="persistent"
      anchor="left"
      open={open}
    >
    <div className={styles.drawerHeader}>
      <Toolbar className={styles.toolbar}>
        <IconButton onClick={onClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Toolbar>
    </div>
    <Divider />
    <List>
      {Object.values(primarySidebar).map((item: SidebarNavigationItemSchema) => (
        <ListItem key={item.route} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <Link
                to={item.route}
                className={styles.link}
              >
              <ListItemText>{item.text}</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    {/* {['Inbox', 'Starred'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))} */}
  </Drawer>
  )
})
