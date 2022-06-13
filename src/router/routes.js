import loadable, { lazy } from '@loadable/component';
import { Suspense } from 'react';
import { SpinnerXl } from '../styles/UI/Spinners';

const LogIn = loadable(() => import('../pages/Authorization/LogIn'));
const NotFound = loadable(() => import('../pages/NotFound'));
const SignUp = loadable(() => import('../pages/Authorization/SignUp'));
const UserProfile = loadable(() => import('../app/pages/UserProfile'));
const RequireAuth = loadable(() => import('../context/RequireAuth'));
const Dashboard = loadable(() => import('../app/pages/Dashboard'));
const Pricing = loadable(() => import('../pages/Pricing'));
const ForgotPass = loadable(() => import('../pages/Authorization/ForgotPass'));
const Home = lazy(() => import('../pages/Home'));

export const publicRoutes = [
        {
                index: true,
                element: (
                        <Suspense fallback={<SpinnerXl />}>
                                <Home />
                        </Suspense>
                ),
                replace: false,
        },
        { index: false, path: '/login', element: <LogIn />, replace: false },
        { index: false, path: '/signup', element: <SignUp />, replace: false },
        { index: false, path: '*', element: <NotFound />, replace: false },

        {
                index: false,
                path: '/forgot-password',
                element: <ForgotPass />,
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
