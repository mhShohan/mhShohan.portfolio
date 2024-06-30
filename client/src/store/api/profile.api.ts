import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getProfile: build.query({
      query: () => ({
        url: "/profile",
        method: "GET"
      }),
      providesTags: [tagTypes.profile],
    }),

    updateProfile: build.mutation({
      query: (payload) => ({
        url: "/profile",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.profile],
    }),

  }),
});


export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;