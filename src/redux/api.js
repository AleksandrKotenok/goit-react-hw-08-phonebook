import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contacts = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['API'],
  endpoints: builder => ({
    fetchAPI: builder.query({
      query: () => `/contacts`,
      providesTags: ['API'],
    }),
    deleteContact: builder.mutation({
      query: itemId => ({
        url: `/contacts/${itemId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['API'],
    }),
    signUp: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['API'],
    }),
    SignIn: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['API'],
    }),
    createContact: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['API'],
    }),
  }),
});
export const {
  useFetchAPIQuery,
  useDeleteContactMutation,
  useSignUpMutation,
  useSignInMutation,
  useCreateContactMutation,
} = contacts;
