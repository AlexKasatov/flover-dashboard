import { GlobalStyle } from './styles/Theme';
import ContextProvider from './context';
import Header from './components/Header';

function App() {
        return (
                <ContextProvider>
                        <GlobalStyle />
                        <Header />
                </ContextProvider>
        );
}

export default App;
