import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const experienceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getAllExperience: build.query({
      query: () => ({
        url: "/experiences",
        method: "GET"
      }),
      providesTags: [tagTypes.experience],
    }),

    addExperience: build.mutation({
      query: (payload) => ({
        url: "/experiences",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.experience],
    }),

  }),
});


export const { useGetAllExperienceQuery, useAddExperienceMutation } = experienceApi;