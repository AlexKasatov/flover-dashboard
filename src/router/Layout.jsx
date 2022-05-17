import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

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
