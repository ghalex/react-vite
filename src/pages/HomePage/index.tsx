import React, { FC } from 'react'
import { useFetchProducts } from '@/api/products'
import { Box, Button, Typography, IconButton } from '@mui/joy'
import { MainLayout as Layout } from '@/layouts'
import { HeaderIcons, HeaderLogo, HeaderSearch, HBox, SideNavExample } from '@/components'
import { getInitColorSchemeScript } from '@mui/joy/styles'

import MenuIcon from '@mui/icons-material/Menu'

const HomePage: FC<any> = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const products = useFetchProducts()

  if (products.isLoading) {
    return <span>Loading...</span>
  }

  if (products.isError) {
    return <span>Error: {(products.error as any).message}</span>
  }

  return (
    <>
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          sidedrawer
        </Layout.SideDrawer>
      )}

      <Layout.Root>
        <Layout.Header>
          <HBox>
            <IconButton
              variant="outlined"
              size="sm"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <HeaderLogo />
          </HBox>
          <HeaderSearch />
          <HeaderIcons />
        </Layout.Header>
        <Layout.SideNav>
          <SideNavExample />
        </Layout.SideNav>
        <Layout.Main>
          <div>scheme: {getInitColorSchemeScript()}</div>
          <Box sx={{ maxWidth: 650 }}>
            <Typography level='display2'>Find and fix problems</Typography>
            <Typography level='body1' textColor='neutral.600'>ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.</Typography>
          </Box>
          <HBox sx={{ m: 1 }}>
            <Button size='sm' variant='soft'>Click Me</Button>
            <Button size='sm' variant='soft' color='danger'>Cancel</Button>
          </HBox>
          <Typography level="body2">
            <ul>
              {products.data?.map(p => (
                <li key={p.id}>{p.title}</li>
              ))}
            </ul>
          </Typography>
        </Layout.Main>
      </Layout.Root>
    </>
  )
}

export default HomePage
