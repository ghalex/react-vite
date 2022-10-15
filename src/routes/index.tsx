import React, { FC } from 'react'
import { useRoutes } from 'react-router-dom'
// import PrivateRoute from './PrivateRoute'
import * as pages from '@/pages'
// import * as layouts from '@/layouts'

const RenderRouter: FC = () => {
  const element = useRoutes([
    // {
    //   element: <layouts.MainLayout />,
    //   children: [
    {
      path: '/',
      element: <pages.HomePage />
    },
    {
      path: '/test',
      element: <pages.TestPage />
    },
    {
      path: '/*',
      element: <pages.NotFoundPage />
    },
    //   ]
    // },
    {
      path: 'login',
      element: <pages.LoginPage />
    },
    {
      path: 'sign-up',
      element: <pages.SignupPage />
    }
  ])

  return element
}

export default RenderRouter
