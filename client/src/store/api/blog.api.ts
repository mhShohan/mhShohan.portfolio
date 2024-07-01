import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getAllBlog: build.query({
      query: () => ({
        url: "/blogs",
        method: "GET"
      }),
      providesTags: [tagTypes.blog],
    }),

    getSingleBlog: build.query({
      query: (id) => ({
        url: "/blogs/" + id,
        method: "GET"
      }),
      providesTags: [tagTypes.blog],
    }),

    createBlog: build.mutation({
      query: (payload) => ({
        url: "/blogs",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.blog],
    }),

  }),
});


export const { useGetAllBlogQuery, useGetSingleBlogQuery, useCreateBlogMutation } = blogApi;