import React, { FC } from 'react'

import { BaseLayout as Layout } from '@/layouts'
import { IconButton } from '@mui/joy'
import { HeaderIcons, HeaderLogo, HeaderSearch, SideNavExample, HBox } from '@/components'

import MenuIcon from '@mui/icons-material/Menu'

const TestPage: FC<any> = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

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
        test page
      </Layout.Main>
    </Layout.Root>
    </>
  )
}

export default TestPage
