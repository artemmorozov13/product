import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { App, ErrorBoundary, StoreProvider, ThemeProvider } from 'App'

import 'Shared/config/i18next/i18next'
import 'App/styles/index.scss'
import { LocalizationProvider } from '@mui/x-date-pickers'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <StoreProvider>
                <ThemeProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <App />
                    </LocalizationProvider>
                </ThemeProvider>
            </StoreProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
