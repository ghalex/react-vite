import React, { useState } from 'react'
import { Box, TextField, Button, IconButton } from '@mui/joy'

import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import KeyIcon from '@mui/icons-material/Key'

const SignupForm = () => {
  const [passworType, setPasswordType] = useState('password')
  const [passworType2, setPasswordType2] = useState('password')

  const togglePasswordType = () => {
    setPasswordType(passworType === 'text' ? 'password' : 'text')
  }

  const togglePasswordType2 = () => {
    setPasswordType2(passworType2 === 'text' ? 'password' : 'text')
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: 2
    }}>
      <TextField
        // html input attribute
        name="email"
        type="email"
        placeholder="yoda@email.com"
        variant="soft"
        startDecorator={<PersonRoundedIcon />}
        // pass down to FormLabel as children
        label="Email"
      />

      <TextField
        name="password"
        variant="soft"
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

      <TextField
        name="password2"
        variant="soft"
        type={passworType2}
        placeholder="retype password"
        startDecorator={<KeyIcon />}
        endDecorator={
          <IconButton color="neutral" size="sm" onClick={togglePasswordType2}>
            {passworType2 === 'password' ? <VisibilityRoundedIcon /> : <VisibilityOffIcon />}
          </IconButton>
        }
        label="Retype password"
      />

      <Button sx={{ mt: 1 /* margin top */ }}>Signup</Button>
    </Box>
  )
}

export default SignupForm
