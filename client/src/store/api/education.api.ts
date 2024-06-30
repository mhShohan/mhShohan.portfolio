import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const educationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getAllEducation: build.query({
      query: () => ({
        url: "/educations",
        method: "GET"
      }),
      providesTags: [tagTypes.education],
    }),

    addEducation: build.mutation({
      query: (payload) => ({
        url: "/educations",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.education],
    }),

  }),
});


export const { useGetAllEducationQuery, useAddEducationMutation } = educationApi;