import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const jobApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllJob: build.query({
      query: (query) => ({
        url: '/jobs',
        method: 'GET',
        params: query,
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
    deleteJob: build.mutation({
      query: (id) => ({
        url: '/jobs/' + id,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.job],
    }),
    updateJob: build.mutation({
      query: ({ id, ...payload }) => ({
        url: '/jobs/' + id,
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: [tagTypes.job],
    }),
  }),
});

export const {
  useGetAllJobQuery,
  useGetSingleJobQuery,
  useCreateJobMutation,
  useDeleteJobMutation,
  useUpdateJobMutation,
} = jobApi;
