import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://yapcms.herokuapp.com/api',
  }),
  tagTypes: ['Page'],
  endpoints: (builder) => ({
  themes: builder.query({
    query: () => '/themes',
    providesTags: ['Theme'],
  }),
    headers: builder.query({
      query: () => '/menus/header',
      providesTags: ['Header'],
    }),
    pages: builder.query({
      query: () => '/pages/1/sections',
      providesTags: ['Page'],
    }),
    articles: builder.query({
      query: () => '/articles',
      providesTags: ['Article'],
    }),
    article: builder.query({
      query: (slug) => `/articles/${slug}`,
      providesTags: ['Article'],
    }),
    
  }),
});

export const {
  usePagesQuery,
  useThemesQuery,
  useHeadersQuery,
  useArticlesQuery,
  useArticleQuery,
} = Api;
