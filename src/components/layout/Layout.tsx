import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <div>푸터</div>
        </>
    );
};
