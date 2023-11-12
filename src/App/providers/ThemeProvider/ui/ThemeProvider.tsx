import { FC, ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from '../lib/ThemeContext'
import { createTheme, ThemeProvider as ThemeProviderMui } from '@mui/material'

interface IThemeProvider {
  children: ReactNode
}

const storageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum || ThemeEnum.LIGHT

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, toggleTheme] = useState(storageTheme)

  const currentTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const themeProps = useMemo(() => {
    return {
      theme,
      setTheme: toggleTheme
    }
  }, [theme])

  return (
      <ThemeContext.Provider value={themeProps}>
        <ThemeProviderMui theme={currentTheme}>
          {children}
        </ThemeProviderMui>
      </ThemeContext.Provider>
  )
}
