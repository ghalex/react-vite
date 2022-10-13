import React, { FC } from 'react'
import { useFetchProducts } from '@/api/products'

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
      <div>Home Page2223</div>
      <div>
        <ul>
          {products.data?.map(p => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HomePage
