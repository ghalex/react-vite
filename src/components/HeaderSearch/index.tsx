import React, { FC } from 'react'
import { IconButton, TextField, Typography } from '@mui/joy'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

const HeaderSearch: FC<any> = () => {
  return (
    <TextField
      size="sm"
      placeholder="Search anything…"
      startDecorator={<SearchRoundedIcon color="primary" />}
      endDecorator={
        <IconButton variant="outlined" size="sm" color="neutral">
          <Typography fontWeight="lg" fontSize="sm" textColor="text.tertiary">
            /
          </Typography>
        </IconButton>
      }
      sx={{
        flexBasis: '500px',
        display: {
          xs: 'none',
          md: 'flex'
        }
      }}
    />
  )
}

export default HeaderSearch
