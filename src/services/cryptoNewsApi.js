import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";




export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://bing-news-search1.p.rapidapi.com",
        prepareHeaders: (header) => {
            header.set("X-BingApis-SDK", "true");
            header.set("X-RapidAPI-Key", "df032b8bb0msh473c0907cbc4d3ep1fdd4bjsne19288270477");
            header.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
            return header;
        },
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count})=> (`news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});
export const {useGetCryptoNewsQuery} = cryptoNewsApi;