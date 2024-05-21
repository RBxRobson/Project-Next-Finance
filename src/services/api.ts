import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://next-finance-fake-api-rbxrobsons-projects.vercel.app/'
  }),
  endpoints: (builder) => ({
    getHome: builder.query<Home, void>({
      query: () => 'home'
    })
  })
})

export const { useGetHomeQuery } = api
export default api
