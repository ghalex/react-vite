import React, { useState } from 'react'
import { Box, TextField, Button, IconButton } from '@mui/joy'

import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import KeyIcon from '@mui/icons-material/Key'

const FormLogin = () => {
  const [passworType, setPasswordType] = useState('password')

  const togglePasswordType = () => {
    setPasswordType(passworType === 'text' ? 'password' : 'text')
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
      <TextField
        // html input attribute
        name="email"
        type="email"
        placeholder="johndoe@email.com"
        startDecorator={<PersonRoundedIcon />}
        // pass down to FormLabel as children
        label="Email"
      />

      <TextField
        name="password"
        type={passworType}
        placeholder="password"
        startDecorator={<KeyIcon />}
        endDecorator={
          <IconButton color="neutral" size="sm" onClick={togglePasswordType}>
            {passworType === 'password' ? <VisibilityRoundedIcon /> : <VisibilityOffIcon />}
          </IconButton>
        }
        label="Password"
      />

      <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
    </Box>
  )
}

export default FormLogin
