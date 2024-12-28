/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Routes array for route mapping
 */
import LandingPage from '../pages/LandingPage';
import LoadingPage from '../pages/LoadingPage';
import NotFoundPage from '../pages/NotFoundPage';

const routes = [
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/loading',
        element: <LoadingPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
];

export default routes;