import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import NotFound from '../../pages/NotFound';
import Home from '../../pages/Home';
import { PATH } from '../../utils/constants';



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
                // another page...
            },
        ],
    },
]);
