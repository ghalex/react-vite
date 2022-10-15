import React, { FC } from 'react'
import { Box, Typography, Button } from '@mui/joy'
import HBox from '../HBox'

interface Props {
  products: any[]
}

const ContentExemple: FC<Props> = ({ products }) => {
  return (
    <Box fontFamily="body">
      <Box sx={{ maxWidth: 650 }}>
        <Typography level='display2'>Find and fix problems</Typography>
        <Typography level='body1' textColor='neutral.600'>ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.</Typography>
      </Box>
      <HBox sx={{ m: 1 }}>
        <Button size='sm' variant='soft'>Click Me</Button>
        <Button size='sm' variant='soft' color='danger'>Cancel</Button>
      </HBox>

      <ul>
        {products?.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </Box>
  )
}

export default ContentExemple
