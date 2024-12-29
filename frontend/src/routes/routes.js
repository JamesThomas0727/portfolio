/**
 * Author: James Thomas
 * Date: 2024/12/28
 * Description: Routes array for route mapping
 */
import { LandingPage, NotFoundPage } from '../pages';

const routes = [
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
];

export default routes;