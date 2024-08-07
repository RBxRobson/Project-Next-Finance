import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://next-finance-fake-api-rbxrobsons-projects.vercel.app/'
  }),
  endpoints: (builder) => ({
    getHome: builder.query<Home, void>({
      query: () => 'home'
    }),
    getAuth: builder.query<Auth, void>({
      query: () => 'auth'
    }),
    getCareers: builder.query<Careers, void>({
      query: () => 'careers'
    }),
    getAbout: builder.query<About, void>({
      query: () => 'about'
    })
  })
})

export const {
  useGetHomeQuery,
  useGetAuthQuery,
  useGetCareersQuery,
  useGetAboutQuery
} = api
export default api
