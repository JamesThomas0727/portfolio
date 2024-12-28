/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Routes array for route mapping
 */
import { LandingPage, LoadingPage, NotFoundPage } from '../pages';

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