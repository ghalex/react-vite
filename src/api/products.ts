import { useAxios } from './request'
import { useQuery } from 'react-query'

interface Product {
  id: number
  title: string
}

interface ProductsResult {
  limit: number
  total: number
  skip: number
  products: Product[]
}

export const useFetchProducts = () => {
  const axios = useAxios()

  return useQuery('products', async () => {
    const response = await axios.get<ProductsResult>('products')
    return response.data.products
  })
}
