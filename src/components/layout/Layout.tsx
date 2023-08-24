import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <div>푸터</div>
        </>
    );
};

export default Layout;
