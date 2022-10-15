import React, { FC } from 'react'
import Box, { BoxProps } from '@mui/joy/Box'

const Sidebar: FC<BoxProps> = (props) => {
  return (
    <Box
    component="nav"
    className="sidebar"
    {...props}
    sx={[
      {
        p: 0,
        bgcolor: 'background.componentBg',
        borderRight: '1px solid',
        borderColor: 'divider',
        display: {
          sm: 'none',
          md: 'initial'
        }
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx])
    ]}
  />
  )
}

export default Sidebar
