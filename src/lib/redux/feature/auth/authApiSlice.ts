import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    login: builder.mutation({
      query: (data: { email: string; password: string }) => {
        return {
          url: `/api/login`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: data,
        };
      },
      async onQueryStarted(
        _: any,
        { queryFulfilled, dispatch }: { queryFulfilled: any; dispatch: any }
      ) {
        try {
          const result = await queryFulfilled;

          console.log("result", result);

          localStorage.setItem(
            "auth",
            JSON.stringify({
              access_token: result?.data?.token,
            })
          );
          dispatch(
            userLoggedIn({
              access_token: result?.data?.token,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
      providesTags: [""],
    }),
    signUp: builder.mutation({
      query: (data: { email: string; password: string }) => {
        return {
          url: `/api/register`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: data,
        };
      },
      async onQueryStarted(
        _: any,
        { queryFulfilled, dispatch }: { queryFulfilled: any; dispatch: any }
      ) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
          localStorage.setItem(
            "auth",
            JSON.stringify({
              access_token: result?.data?.token,
            })
          );
          dispatch(
            userLoggedIn({
              access_token: result?.data?.token,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApiSlice;
