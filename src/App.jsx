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
                </AuthProvider>
        );
}

export default App;
