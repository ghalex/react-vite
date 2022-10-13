import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
// import { Box } from '@mui/material'

// interface MainLayoutProps {
//   children: React.ReactElement
// }

const MainLayout: FC<any> = () => {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: '100vh',
    //     backgroundColor: '#f4f5f9'
    //   }}
    // >
    //   {children}
    // </Box>
    <div>
      <header>Header</header>
      <main><Outlet /></main>
    </div>
  )
}

export default MainLayout
