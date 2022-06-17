import { Route, Routes, useLocation } from 'react-router-dom';
import { Children } from 'react';
import { AnimatePresence } from 'framer-motion';
import { publicRoutes, privateRoutes } from './routes';
import Layout from './Layout';

function AnimatedRoutes() {
        const location = useLocation();
        return (
                <AnimatePresence>
                        <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Layout />}>
                                        {Children.toArray(
                                                publicRoutes.map(({ index, element, path, replace }) => (
                                                        <Route
                                                                path={path}
                                                                index={index}
                                                                replace={replace}
                                                                element={element}
                                                        />
                                                ))
                                        )}

                                        {Children.toArray(
                                                privateRoutes.map(({ index, element, path, replace }) => (
                                                        <Route
                                                                path={path}
                                                                index={index}
                                                                replace={replace}
                                                                element={element}
                                                        />
                                                ))
                                        )}
                                </Route>
                        </Routes>
                </AnimatePresence>
        );
}

export default AnimatedRoutes;
