import React, { FC } from 'react'
import Box, { BoxProps } from '@mui/joy/Box'

interface Props extends BoxProps {
  cols?: 1 | 2 | 3
}

const Root: FC<Props> = ({ cols = 2, ...props }) => {
  const gridColumns = {
    1: '1fr',
    2: 'minmax(160px, 300px) minmax(500px, 1fr)',
    3: 'minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)'
  }

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
            md: gridColumns[cols]
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
