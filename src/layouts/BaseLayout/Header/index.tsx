import React from 'react'
import Box, { BoxProps } from '@mui/joy/Box'

const Header = (props: BoxProps) => (
  <Box
    component="header"
    className="header"
    {...props}
    sx={[
      {
        px: 2,
        gap: 2,
        bgcolor: 'background.componentBg',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gridColumn: '1 / -1',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 1100
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx])
    ]}
  />
)

export default Header
