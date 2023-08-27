import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'https://exercisedb.p.rapidapi.com'; // /exercises/bodyPartList
export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: url, headers: {
            'X-RapidAPI-Key': '3b22504ff1mshee8d3ab7dbb395fp14e064jsnc409977ffdbe',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    }),
    endpoints: (builder) => ({
        getExercises: builder.query<string[], string>({     // <----------------------------------------------------------
            query: (query = '/') => `/exercises/${query}`,
        }),
    }),

});

export const { useGetExercisesQuery } = api;


