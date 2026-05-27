'use client'

import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/api/api.function'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })
}