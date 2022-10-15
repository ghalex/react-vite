import React, { FC } from 'react'
import { useFetchProducts } from '@/api/products'
import { BaseLayout as Layout } from '@/layouts'
import { HeaderIcons, HeaderLogo, HeaderSearch, HBox, SideNavExample, ContentExample } from '@/components'
import { IconButton } from '@mui/joy'

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
          <SideNavExample />
        </Layout.SideDrawer>
      )}

      <Layout.Root cols={2}>
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
          <ContentExample products={products.data ?? []} />
        </Layout.Main>
      </Layout.Root>
    </>
  )
}

export default HomePage
