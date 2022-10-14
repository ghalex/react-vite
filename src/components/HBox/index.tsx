import React from 'react'
import Box, { BoxProps } from '@mui/joy/Box'

const HBox = (props: BoxProps) => (
  <Box
    {...props}
    sx={[
      {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 1
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx])
    ]}
  />
)

export default HBox
