import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <>
                    <Route element={<Layout />}>
                        <Route path="/" element={<>메인</>} />
                    </Route>
                </>
            </Routes>
        </BrowserRouter>
    );
}
