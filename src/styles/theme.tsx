import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { ReactNode } from 'react'

export default function ThemeConfig({ children }: { children: ReactNode }) {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
