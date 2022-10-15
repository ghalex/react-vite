import React from 'react'
import { TextField, Button } from '@mui/joy'

const FormSignup = () => (
  <>
    <TextField
      // html input attribute
      name="email"
      type="email"
      placeholder="johndoe@email.com"
      // pass down to FormLabel as children
      label="Email"
    />

    <TextField
      name="password"
      type="password"
      placeholder="password"
      label="Password"
    />

    <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
  </>
)

export default FormSignup
