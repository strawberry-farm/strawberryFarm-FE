import { Router } from './routes/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import ComponentModal from './components/@common/modal/ComponentModal';

const queryClient = new QueryClient();

function App() {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <Router />
                <ComponentModal />
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
