import { useState } from 'react';
import Input from '../../@common/input/Input';
import { queryKey } from '../../../queries/query-key';
import { useQuery } from '@tanstack/react-query';
import axios from '../../../Lib/Axios/index';

export default function MyPageInfo() {
    const [nickname, setNickname] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const { data } = useQuery({
        queryKey: queryKey.user.user(),
        queryFn: async () => axios.get('/user').then((res) => console.log(res)),
    });
    // console.log(data);

    return (
        <div className="mypage-info">
            <h2 className="mypage-title">회원정보 수정</h2>
            <div className="mypage-body">
                <div className="mypage-info-contents">
                    <div className="mypage-info-profile">
                        <img src="/images/icons/user-solid.png" alt="" />
                    </div>
                    <div className="mypage-info-form">
                        <Input
                            type="text"
                            placeholder="축구조아"
                            setValue={setNickname}
                        />
                        <Input
                            type="text"
                            placeholder="상태메시지를 입력하세요"
                            setValue={setStatusMessage}
                        />
                        <Input
                            type="text"
                            placeholder="zzanggu@gmail.com"
                            disabled={true}
                        />
                    </div>
                </div>
                <button
                    type="button"
                    className="mypage-submit-button button-blue"
                >
                    수정
                </button>
            </div>
        </div>
    );
}
