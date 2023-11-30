import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IExercise } from '../types';

export const api = createApi({
  reducerPath: 'exerciseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL,
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY as string,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
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

export const { useGetExercisesQuery, useGetExerciseByIDQuery } = api;


