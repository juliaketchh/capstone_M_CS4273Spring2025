import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App'
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  colorScheme: 'light',
  primaryColor: 'blue',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <App />
      </MantineProvider>
  </StrictMode>,
)
