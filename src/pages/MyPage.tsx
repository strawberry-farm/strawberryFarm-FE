import { Outlet } from 'react-router-dom';
import Wrapper from '../components/@common/wrapper/Wrapper';
import MypageSidebar from './../components/mypage/mypage-sidebar/MypageSidebar';

export default function MyPage() {
    return (
        <Wrapper>
            <h1 className="hidden">마이 페이지</h1>
            <MypageSidebar />
            <Outlet />
        </Wrapper>
    );
}
