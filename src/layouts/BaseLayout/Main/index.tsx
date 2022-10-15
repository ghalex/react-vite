import React, { FC } from 'react'
import Box, { BoxProps } from '@mui/joy/Box'

const Main: FC<BoxProps> = (props) => {
  return (
    <Box
      component="main"
      className="main"
      {...props}
      sx={[{ display: 'flex', flexDirection: 'column', p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
    />
  )
}

export default Main
