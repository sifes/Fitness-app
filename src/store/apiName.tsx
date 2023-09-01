import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
'https://exerciseapi3.p.rapidapi.com/exercise/name/push%20up'
const url2 = 'https://exerciseapi3.p.rapidapi.com';
export const apiName = createApi({
    reducerPath: 'apiName',
    baseQuery: fetchBaseQuery({
        baseUrl: url2,
        headers: {
            'X-RapidAPI-Key': '3b22504ff1mshee8d3ab7dbb395fp14e064jsnc409977ffdbe',
            'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
        }
    }),
    endpoints: (builder) => ({
        getExerciseByName: builder.query<any, string>({
            query: (query = '/') => `/exercise/name/${query}`,
        }),

    }),

});

export const { useGetExerciseByNameQuery } = apiName;


