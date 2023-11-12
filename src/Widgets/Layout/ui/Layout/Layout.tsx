import { FC, ReactNode, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import styles from './Layout.module.scss';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar/ui/Sidebar';
import { Container } from '@mui/material';

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.layout}>
      <CssBaseline />
      <Header onOpen={handleDrawerOpen} />
      <Sidebar open={open} onClose={handleDrawerClose} />
      <Container>
        {children}
      </Container>
    </div>
  );
};