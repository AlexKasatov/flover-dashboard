import { GlobalStyle } from './styles/Theme';
import ContextProvider from './context';
import PageRouter from './router/PageRouter';
import { AuthProvider } from './context/AuthContext';

function App() {
        return (
                <ContextProvider>
                        <AuthProvider>
                                <GlobalStyle />
                                <PageRouter />
                        </AuthProvider>
                </ContextProvider>
        );
}

export default App;
