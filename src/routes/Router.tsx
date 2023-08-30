import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import PasswordReset from '../pages/PasswordReset';
import { Main } from '../pages/Main';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/password-reset" element={<PasswordReset />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
