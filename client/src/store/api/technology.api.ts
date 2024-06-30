import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const technologyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getTechnologies: build.query({
      query: () => ({
        url: "/technologies",
        method: "GET"
      }),
      providesTags: [tagTypes.technology],
    }),

    addTechnologies: build.mutation({
      query: (payload) => ({
        url: "/technologies",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.technology],
    }),

  }),
});


export const { useGetTechnologiesQuery, useAddTechnologiesMutation } = technologyApi;