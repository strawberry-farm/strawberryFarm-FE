import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>오류수정</>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
