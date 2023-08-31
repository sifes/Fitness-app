import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import { PATH } from '../utils/constants';
import Exercises from '../pages/ExercisesPage';
import { DetailedExercise } from '../pages/DetailedExercise';



export const router = createBrowserRouter([
    {
        path: PATH.INDEX,
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                element: <Exercises />,
                path: PATH.EXERCISES,
            },
            {
                path: `${PATH.EXERCISES}/:id`,
                element: <DetailedExercise />,
            },
        ],
    },
]);
