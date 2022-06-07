import Home from '../pages/Home';
import LogIn from '../pages/Authorization/LogIn';
import SignUp from '../pages/Authorization/SignUp';
import NotFound from '../pages/NotFound';
import UserProfile from '../app/pages/UserProfile';
import RequireAuth from '../context/RequireAuth';

export const publicRoutes = [
        { index: true, element: <Home />, replace: false },
        { index: false, path: '/login', element: <LogIn />, replace: false },
        { index: false, path: '/signup', element: <SignUp />, replace: false },
        { index: false, path: '*', element: <NotFound />, replace: false },
];

export const privateRoutes = [
        {
                index: false,
                path: 'user/:id',
                element: (
                        <RequireAuth>
                                <UserProfile />
                        </RequireAuth>
                ),
                replace: false,
        },
];
