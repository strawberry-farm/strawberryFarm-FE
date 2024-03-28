import { queryKey } from '../../../queries/query-key';
import { Region } from '../../header/HeaderRegion';
import axios from '../../../Lib/Axios';
import { useQuery } from '@tanstack/react-query';
import { Suspense, useState } from 'react';
// import { useRecoilState } from 'recoil';
// import { modalState } from '../../../atom/modalState';
export default function MyPageLikeLocation() {
    // const [modal, setModal] = useRecoilState(modalState);
    const [likeLocation, setLikeLocation] = useState<any>({
        sigunguName: '',
        bCode: 0,
    });
    console.log(likeLocation, 'likeLocation');
    const { data } = useQuery({
        queryKey: queryKey.contents.search,
        queryFn: async () =>
            axios.get('/user/interestArea').then((res) => res.data),
    });
    // const likeBtn = useMutation(
    //     (body: { profileUrl: string; nickName: string; aboutMe: string }) =>
    //         axios
    //             .patch(
    //                 '/user/interestArea',
    //                 {
    //                     profileUrl: body.profileUrl,
    //                     nickname: body.nickName,
    //                     aboutMe: body.aboutMe,
    //                 },
    //                 {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         'Access-Control-Allow-Origin': '*',
    //                         'Access-Control-Allow-Credentials': 'true',
    //                     },
    //                 },
    //             )
    //             .then(() => {
    //                 setModal({
    //                     ...modal,
    //                     content: '관심지역이 설정되었습니다.',
    //                     confirm: '확인',
    //                     modalOpen: true,
    //                     url: '',
    //                 });
    //             }),
    // );

    return (
        <div className="mypage-likeLocation">
            <h2 className="mypage-title">관심 지역 설정</h2>
            <div className="mypage-body">
                <div className="mypage-likeLocation-region">
                    <Suspense fallback={<>로딩중...</>}>
                        {data && (
                            <Region data={data} setLocation={setLikeLocation} />
                        )}
                    </Suspense>
                </div>
                <button
                    type="button"
                    className="mypage-submit-button button-blue"
                    style={{ marginTop: '10px' }}
                    // onClick={() => likeBtn()}
                >
                    등록
                </button>
            </div>
        </div>
    );
}
