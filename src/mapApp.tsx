import React, { FC, useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import axios, { AxiosContext } from '@/api/request'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CssVarsProvider } from '@mui/joy/styles'
// import { ErrorBoundary } from 'react-error-boundary'

import RenderRouter from './routes'
import theme from './theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchInterval: false
    }
  }
})

const AxiosProvider: FC<any> = ({ children }) => {
  const axiosValue = useMemo(() => {
    return axios
  }, [])

  return (
    <AxiosContext.Provider value={axiosValue}>{children}</AxiosContext.Provider>
  )
}

const MainApplication: FC<any> = () => {
  return (
          <BrowserRouter>
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <CssVarsProvider theme={theme}>
            <RenderRouter />
        </CssVarsProvider>
      </QueryClientProvider>
    </AxiosProvider>
          </BrowserRouter>
  )
}

export default MainApplication
