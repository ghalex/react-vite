import React, { FC } from 'react'
import { IconButton, List, ListItem, ListItemButton, ListItemDecorator, ListItemContent, Box, Chip, Typography } from '@mui/joy'

// Icons
// import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
// import StackedBarChartIcon from '@mui/icons-material/StackedBarChart'
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded'
import SettingsIcon from '@mui/icons-material/Settings'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'

const SideNavHeader: FC<any> = ({ children }) => {
  return (
    <Box
      sx={{
        px: 2,
        pt: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Typography
        id="nav-list-browse"
        textColor="neutral.500"
        fontWeight={600}
        sx={{
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '.1rem'
        }}
      >
        {children}
      </Typography>
      <IconButton
        size="sm"
        variant="plain"
        color="primary"
        sx={{ '--IconButton-size': '24px' }}
      >
        <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
      </IconButton>
    </Box>
  )
}

const SideNavExample: FC<any> = () => {
  return (
    <List size="sm">
      <SideNavHeader>Browse</SideNavHeader>
      <ListItem sx={{ p: 0 }}>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '12px', mb: '0px' }
          }}
        >
          {/* People */}
          <ListItem>
            <ListItemButton component="a" href='/' variant="soft" color="primary">
              <ListItemDecorator sx={{ color: 'inherit' }}>
                <DashboardCustomizeIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Dashboard</ListItemContent>
            </ListItemButton>
          </ListItem>

          {/* Manage */}
          <ListItem>
            <ListItemButton component="a" href='/test'>
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                <AssignmentIndRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Test</ListItemContent>
            </ListItemButton>
          </ListItem>

          {/* Policies */}
          <ListItem>
            <ListItemButton component="a" href="/login">
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                <ArticleRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Login</ListItemContent>
              <Chip variant="soft" size="sm" sx={{ borderRadius: 'sm' }}>
                Beta
              </Chip>
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>

      <SideNavHeader>Admin</SideNavHeader>
      <ListItem sx={{ p: 0 }}>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '12px', mb: '2px' }
          }}
        >
          {/* Settings */}
          <ListItem>
            <ListItemButton component="a" href='/settings'>
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                <SettingsIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Settings</ListItemContent>
            </ListItemButton>
          </ListItem>

        </List>
      </ListItem>
    </List>
  )
}

export default SideNavExample
