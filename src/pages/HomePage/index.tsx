import React, { FC } from 'react'
import { useFetchProducts } from '@/api/products'
import { Sheet, Button, Typography } from '@mui/joy'

const HomePage: FC<any> = () => {
  const products = useFetchProducts()

  if (products.isLoading) {
    return <span>Loading...</span>
  }

  if (products.isError) {
    return <span>Error: {(products.error as any).message}</span>
  }

  return (
    <div>
      <Sheet sx={{ maxWidth: 650 }}>
        <Typography level='display2'>Find and fix problems</Typography>
        <Typography level='body1' textColor='neutral.600'>ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.</Typography>
      </Sheet>
      <Sheet sx={{ m: 1 }}>
        <Button size='sm' variant='soft'>Click Me</Button>
      </Sheet>
      <Typography level="body2">
        <ul>
          {products.data?.map(p => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </Typography>
    </div>
  )
}

export default HomePage
