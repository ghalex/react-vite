import React, { FC } from 'react'
import Box, { BoxProps } from '@mui/joy/Box'
import Sheet from '@mui/joy/Sheet'

type Props = BoxProps & { onClose: React.MouseEventHandler<HTMLDivElement> }

const SideDrawer: FC<Props> = ({ onClose, ...props }) => (
  <Box
    {...props}
    sx={[
      { position: 'fixed', zIndex: 1200, width: '100%', height: '100%' },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx])
    ]}
  >
    <Box
      role="button"
      onClick={onClose}
      sx={{
        position: 'absolute',
        inset: 0,
        bgcolor: (theme) =>
          `rgba(${theme.vars.palette.neutral.darkChannel} / 0.4)`
      }}
    />
    <Sheet
      sx={{
        minWidth: 300,
        width: 'max-content',
        height: '100%',
        p: 0,
        boxShadow: 'lg',
        bgcolor: 'background.componentBg'
      }}
    >
      {props.children}
    </Sheet>
  </Box>
)

export default SideDrawer
