import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/Theme';
import ContextProvider from './context';
import PageRouter from './router/PageRouter';
import { AuthProvider } from './context/AuthContext';

function App() {
        return (
                <AuthProvider>
                        <ContextProvider>
                                <GlobalStyle />
                                <PageRouter />
                        </ContextProvider>
                        <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                        />
                </AuthProvider>
        );
}

export default App;
