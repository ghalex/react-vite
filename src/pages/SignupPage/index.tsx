import React, { FC } from 'react'
import { BlankLayout } from '@/layouts'
import { FormSignup, HeaderLogo } from '@/components'
import { Box, Sheet, Typography, Link } from '@mui/joy'

const SignupPage: FC<any> = ({ children }) => {
  return (
    <BlankLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Sheet
            sx={{
              width: 300,
              my: 4, // margin top & botom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              borderRadius: 'sm',
              boxShadow: 'md'
            }}
            variant="outlined"
          >

          <HeaderLogo size={64} hideLabel />
          <Box sx={{ textAlign: 'center' }}>
            <Typography level="h3" component="h1" sx={{ mb: '-2px' }}>
              <b>Create account</b>
            </Typography>
            <Typography level="body2">Create your account to login.</Typography>
          </Box>
          <FormSignup />
          <Typography
            endDecorator={<Link href="/login">Login</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Have an account?
          </Typography>
        </Sheet>
      </Box>
    </BlankLayout>
  )
}

export default SignupPage
