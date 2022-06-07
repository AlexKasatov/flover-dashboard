import { Children } from 'react';
import { Route, Routes, HashRouter, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { publicRoutes, privateRoutes } from './routes';

const PageRouter = () => (
        // ! Change BrowserRouter to HashRouter to enable hash routing for github pages
        <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Layout />}>
                                {Children.toArray(
                                        publicRoutes.map(({ index, element, path, replace }) => (
                                                <Route path={path} index={index} replace={replace} element={element} />
                                        ))
                                )}

                                {Children.toArray(
                                        privateRoutes.map(({ index, element, path, replace }) => (
                                                <Route path={path} index={index} replace={replace} element={element} />
                                        ))
                                )}
                                {/* <Route path="/about" replace={false} element={<About />} />
                                <Route path="*" replace={false} element={<NotFound />} />
                                <Route path="/" replace={false} element={<Home />} /> */}
                        </Route>
                </Routes>
        </BrowserRouter>
);

export default PageRouter;
