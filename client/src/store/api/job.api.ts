import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const jobApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllJob: build.query({
      query: () => ({
        url: '/jobs',
        method: 'GET',
      }),
      providesTags: [tagTypes.job],
    }),

    getSingleJob: build.query({
      query: (id) => ({
        url: '/jobs/' + id,
        method: 'GET',
      }),
      providesTags: [tagTypes.job],
    }),

    createJob: build.mutation({
      query: (payload) => ({
        url: '/jobs',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: [tagTypes.job],
    }),
  }),
});

export const { useGetAllJobQuery, useGetSingleJobQuery, useCreateJobMutation } = jobApi;
