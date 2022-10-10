import React, { FC, useMemo, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import axios, { AxiosContext } from '@/api/request'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ErrorBoundary } from 'react-error-boundary'

import RenderRouter from './routes'

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
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Suspense fallback.</div>}>
          <BrowserRouter>
            <RenderRouter />
          </BrowserRouter>
        </Suspense>
      </QueryClientProvider>
    </AxiosProvider>
  )
}

export default MainApplication
