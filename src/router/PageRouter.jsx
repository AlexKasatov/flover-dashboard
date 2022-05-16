import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Layout from './Layout';

const PageRouter = () => (
        <HashRouter>
                <Routes>
                        <Route index="/" element={<Layout />} />
                </Routes>
        </HashRouter>
);

export default PageRouter;
