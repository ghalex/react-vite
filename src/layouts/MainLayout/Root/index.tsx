import React, { FC } from 'react'
import Box, { BoxProps } from '@mui/joy/Box'

const Root: FC<BoxProps> = (props) => {
  return (
    <Box
      {...props}
      sx={[
        {
          bgcolor: 'background.appBody',
          display: 'grid',
          gridTemplateColumns: {
            // xs: '1fr',
            // sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
            sm: '1fr',
            md: 'minmax(160px, 300px) minmax(500px, 1fr)'
          },
          gridTemplateRows: '64px 1fr',
          minHeight: '100vh'
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
      ]}
    />
  )
}

export default Root
