import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import MyPageHost from '../components/mypage/mypage-host/MyPageHost';
import MyPageUser from '../components/mypage/mypage-user/MyPageUser';
import MyPageWishList from '../components/mypage/mypage-wishlist/MyPageWishList';
import { ChatRoom } from '../pages/ChatRoom';
import Detail from '../pages/Detail';
import { Main } from '../pages/Main';
import MyPage from '../pages/MyPage';
import PasswordReset from '../pages/PasswordReset';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import { Write } from '../pages/Write';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/password-reset" element={<PasswordReset />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/write" element={<Write />} />
                    <Route path="/chatroom" element={<ChatRoom />} />
                    <Route path="/mypage/" element={<MyPage />}>
                        <Route path="user" element={<MyPageUser />} />
                        <Route path="host" element={<MyPageHost />} />
                        <Route path="wishlist" element={<MyPageWishList />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
