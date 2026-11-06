import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bestApi = createApi({
  reducerPath: "bestApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com/" }),
  endpoints: () => ({}),
});
