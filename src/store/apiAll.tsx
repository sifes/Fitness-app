import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IExercise } from '../types';

const url = 'https://exercisedb.p.rapidapi.com'; // /exercises/bodyPartList
export const apiAll = createApi({
    reducerPath: 'apiAll',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        headers: {
            'X-RapidAPI-Key': '3b22504ff1mshee8d3ab7dbb395fp14e064jsnc409977ffdbe',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    }),
    endpoints: (builder) => ({
        getExercises: builder.query<IExercise[], string>({
            query: (query = '/') => `/exercises/${query}`,
        }),
        getExerciseByID: builder.query<IExercise, string>({
            query: (query = '/') => `/exercises/exercise/${query}`,
        }),
    }),

});



export const { useGetExercisesQuery, useGetExerciseByIDQuery } = apiAll;


