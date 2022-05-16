import { GlobalStyle } from './styles/Theme';
import ContextProvider from './context';
import PageRouter from './router/PageRouter';

function App() {
        return (
                <ContextProvider>
                        <GlobalStyle />
                        <PageRouter />
                </ContextProvider>
        );
}

export default App;
