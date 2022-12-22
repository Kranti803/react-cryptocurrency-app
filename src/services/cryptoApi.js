import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://coinranking1.p.rapidapi.com",
        prepareHeaders:(header)=>{
            header.set("X-RapidAPI-Key", "df032b8bb0msh473c0907cbc4d3ep1fdd4bjsne19288270477");
            header.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
            return header;
        },
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) =>(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query:(coinId)=>(`/coin/${coinId}`)
        }),
        
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery} = cryptoApi;

