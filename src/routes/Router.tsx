import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import Signin from '../pages/Signin';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<>메인</>} />
                    <Route path="/signin" element={<Signin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
