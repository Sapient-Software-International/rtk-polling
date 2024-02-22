// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from 'src/app/constants';
import { IPost } from 'src/app/types';

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => `/posts`,
    }),
    addPost: builder.mutation<IPost, Partial<IPost>>({
      query: (body) => {
        return {
          url: `/posts`,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useAddPostMutation } = rtkApi;
