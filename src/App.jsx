import { GlobalStyle } from './styles/Theme';
import ContextProvider from './context';
import PageRouter from './router/PageRouter';
import { AuthProvider } from './context/AuthContext';
import SEO from './utils/SEO';

function App() {
        return (
                <ContextProvider>
                        <AuthProvider>
                                <SEO />
                                <GlobalStyle />
                                <PageRouter />
                        </AuthProvider>
                </ContextProvider>
        );
}

export default App;
