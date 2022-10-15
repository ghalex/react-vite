import React, { FC } from 'react'

import { BaseLayout as Layout } from '@/layouts'
import { HeaderIcons, HeaderLogo } from '@/components'
import { Button, Typography } from '@mui/joy'
import icon404 from '@/assets/404-error.png'

const NotFoundPage: FC<any> = () => {
  return (
    <Layout.Root cols={1}>
      <Layout.Header>
        <HeaderLogo />
        {/* <HeaderSearch /> */}
        <HeaderIcons />
      </Layout.Header>

      <Layout.Main sx={{ alignItems: 'center' }}>
        <img src={icon404} height={400} />
        <Typography level="display1">Page not found</Typography>
        <Typography>Page you are trying to access cannot be found.</Typography>
        <Button component="a" href="/" sx={{ mt: 2 }}>Go to home</Button>
      </Layout.Main>
    </Layout.Root>

  )
}

export default NotFoundPage
