import React, { FC } from 'react'
import { BlankLayout } from '@/layouts'
import { FormLogin, HeaderLogo } from '@/components'
import { Box, Sheet, Typography, Link } from '@mui/joy'

const LoginPage: FC<any> = ({ children }) => {
  return (
    <BlankLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <HeaderLogo size={64} hideLabel />
        <Sheet
            sx={{
              width: 300,
              my: 4, // margin top & botom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderRadius: 'sm',
              boxShadow: 'md'
            }}
            variant="outlined"
          >
          <div>
            <Typography level="h3" component="h1" sx={{ mb: '-2px' }}>
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to your account.</Typography>
          </div>
          <FormLogin />
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </Box>
    </BlankLayout>
  )
}

export default LoginPage
