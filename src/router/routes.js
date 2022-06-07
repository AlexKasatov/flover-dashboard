import Home from '../pages/Home';
import LogIn from '../pages/Authorization/LogIn';
import SignUp from '../pages/Authorization/SignUp';
import NotFound from '../pages/NotFound';
import UserProfile from '../app/pages/UserProfile';
import RequireAuth from '../context/RequireAuth';
import Dashboard from '../app/pages/Dashboard';
import Pricing from '../pages/Authorization/Pricing';

export const publicRoutes = [
        { index: true, element: <Home />, replace: false },
        { index: false, path: '/login', element: <LogIn />, replace: false },
        { index: false, path: '/signup', element: <SignUp />, replace: false },
        { index: false, path: '*', element: <NotFound />, replace: false },
        {
                index: false,
                path: '/dashboard',
                element: (
                        <RequireAuth>
                                <Dashboard />
                        </RequireAuth>
                ),
                replace: false,
        },
];

export const privateRoutes = [
        {
                index: false,
                path: '/user',
                element: (
                        <RequireAuth>
                                <UserProfile />
                        </RequireAuth>
                ),
                replace: false,
        },
];
