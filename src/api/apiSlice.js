import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://serverskyfull.herokuapp.com' }),
    tagTypes: ['Person'],
    endpoints: builder => ({
        getPerson: builder.query({
            query: () => '/person',
            providesTags: ['Person']
        }),
        getOnePerson: builder.query({
            query: id => `/person/${id}`,
            providesTags: ['Person']
        }),
        createMessage: builder.mutation({
            query: ({mess,id}) => {
                return {
                    url: `/person/${id}`,
                    method: 'PATCH',
                    body: mess
                }

            },
            invalidatesTags: ['Person']
        }),

    })
});
export const { useGetPersonQuery, useGetOnePersonQuery, useCreateMessageMutation } = apiSlice; 
