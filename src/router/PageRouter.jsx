import React from 'react';
import { Route, Routes, HashRouter, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Home from '../pages/Home';

const PageRouter = () => (
        // ! Change BrowserRouter to HashRouter to enable hash routing for github pages
        <HashRouter>
                <Routes>
                        <Route path="/" element={<Layout />}>
                                <Route path="/about" replace={false} element={<About />} />
                                <Route path="*" replace={false} element={<NotFound />} />
                                <Route path="/" replace={false} element={<Home />} />
                        </Route>
                </Routes>
        </HashRouter>
);

export default PageRouter;
