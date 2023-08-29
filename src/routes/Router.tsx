import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import PasswordReset from '../pages/PasswordReset';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<>메인</>} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/password-reset" element={<PasswordReset />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
