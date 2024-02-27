import { queryKey } from '../../../queries/query-key';
import { Region } from '../../header/HeaderRegion';
import axios from '../../../Lib/Axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
export default function MyPageLikeLocation() {
    const { data } = useQuery({
        queryKey: queryKey.contents.search,
        queryFn: async () =>
            axios.get('/contents/adminArea').then((res) => res.data),
    });
    const [likeLocation, setLikeLocation] = useState<any>({
        sigunguName: '',
        bCode: 0,
    });
    console.log(likeLocation, 'likeLocation');

    return (
        <div className="mypage-likeLocation">
            <h2 className="mypage-title">관심 지역 설정</h2>
            <div className="mypage-body">
                <div className="mypage-likeLocation-region">
                    {data && (
                        <Region data={data} setLocation={setLikeLocation} />
                    )}
                </div>
                <button
                    type="button"
                    className="mypage-submit-button button-blue"
                    style={{ marginTop: '10px' }}
                >
                    등록
                </button>
            </div>
        </div>
    );
}
