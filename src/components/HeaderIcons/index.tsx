import React from 'react'
import { Box, IconButton } from '@mui/joy'
import BookRoundedIcon from '@mui/icons-material/BookRounded'
import ColorSchemeToggle from '../ColorSchemeToggle'

import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'

const HeaderIcons = () => (
  <Box className="header-icons" sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
    <IconButton
      size="sm"
      variant="outlined"
      color="primary"
      component="a"
      href="/#"
    >
      <BookRoundedIcon />
    </IconButton>
    <IconButton
      size="sm"
      variant="outlined"
      color="primary"
      component="a"
      href="/#"
    >
      <GridViewRoundedIcon />
    </IconButton>
    <ColorSchemeToggle />
  </Box>
)

export default HeaderIcons
