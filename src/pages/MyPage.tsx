import { Outlet } from 'react-router-dom';
import Wrapper from '../components/@common/wrapper/Wrapper';
import MypageSidebar from './../components/mypage/mypage-sidebar/MypageSidebar';
import { useQuery } from '@tanstack/react-query';
import axios from '../Lib/Axios/index';
import { queryKey } from '../queries/query-key';

export default function MyPage() {
    const { data } = useQuery({
        queryKey: queryKey.user.user(),
        queryFn: async () =>
            axios.get(`/user`).then((res) => {
                return res.data;
            }),
    });
    console.log(data, 'ddd');

    return (
        <Wrapper>
            <main className="mypage">
                <h1 className="hidden">마이 페이지</h1>
                <div className="mypage-aside">
                    <MypageSidebar />
                </div>
                <div className="mypage-subpage">
                    <Outlet />
                </div>
            </main>
        </Wrapper>
    );
}
