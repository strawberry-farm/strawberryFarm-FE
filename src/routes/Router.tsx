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
import MyPageInfo from '../components/mypage/mypage-info/MyPageInfo';
import MyPageLikeLocation from '../components/mypage/mypage-likeLocation/MyPageLikeLocation';
import MyPageLikeKeyword from '../components/mypage/mypage-likeKeyword/MyPageLikeKeyword';
import { useEffect } from 'react';
import axios from '../Lib/Axios/index';
import { isTokenValidOrUndefined } from '../Lib/Axios/jwt';

export function Router() {

    
    useEffect(() => {
        const localStorageData = localStorage.getItem('jwt');
        console.log(localStorageData);
        
        if (localStorageData) {
            const token = localStorageData.replace('Bearer ', '').trim(); // Bearer 접두사와 공백을 함께 제거
            const isJwtValid = isTokenValidOrUndefined(token);
            console.log("시작");
            
            if (isJwtValid === '토큰 만료') {
                refreshToken();
            }
        }
    }, []);

    const refreshToken = () => {
        // const email = ''; // 토큰 갱신을 위한 유저 정보 (예: 이메일)

        axios
            .post('/auth/refresh', {
                expiresIn: 60, // 토큰의 만료 시간을 나타내는 것으로 수정
            })
            .then((res) => {
                if (res.data.message === 'Success') {
                    const token = res.data.data.accessToken;
                    localStorage.setItem('jwt', token);
                }
            })
            .catch((error) => {
                console.error('토큰 갱신 오류:', error); // 더 적절한 오류 처리 방법을 구현해도 됩니다.
            });
    };

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
                        <Route path="wishlist" element={<MyPageWishList />} />
                        <Route path="host" element={<MyPageHost />} />
                        <Route
                            path="like-location"
                            element={<MyPageLikeLocation />}
                        />
                        <Route
                            path="like-keyword"
                            element={<MyPageLikeKeyword />}
                        />
                        <Route path="info" element={<MyPageInfo />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
