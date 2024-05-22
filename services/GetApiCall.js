import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const getApiCall = createApi({
  reducerPath: 'getApiCall',
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
  endpoints: builder => ({
    getProductData: builder.query({
      query: () => 'products',
    }),
    getProductDataById: builder.query({
      query: id => ({
        url: `products/${id}`,
      }),
    }),
    addNewPost: builder.mutation({
      query: data => ({
        url: `products`,
        method: 'POST',
        body: data,
      }),
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProductDataQuery,
  useGetProductDataByIdQuery,
  useAddNewPostMutation,
  useDeletePostMutation
} = getApiCall;
