import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

import Footer from '../components/Footer/Footer';

const Layout = () => (
        <>
                <Header />

                <Main>
                        <Outlet />
                </Main>

                <Footer />
        </>
);

export default Layout;
