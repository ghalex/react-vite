import React, { FC } from 'react'
// import { Box } from '@mui/material'

interface BlankLayoutProps {
  children: React.ReactElement
}

const BlankLayout: FC<BlankLayoutProps> = ({ children }) => {
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
    <div>{children}</div>
  )
}

export default BlankLayout
