import Home from '../pages/Home';
import LogIn from '../pages/Authorization/LogIn';
import NotFound from '../pages/NotFound';

export const publicRoutes = [
        { index: true, element: <Home />, replace: false },
        { index: true, path: '/login', element: <LogIn />, replace: false },
        { index: true, path: '*', element: <NotFound />, replace: false },
];

export const privateRoutes = [];
