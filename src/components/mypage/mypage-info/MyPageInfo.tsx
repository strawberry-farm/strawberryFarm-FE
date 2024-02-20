import { useEffect, useState } from 'react';
import Input from '../../@common/input/Input';
import { queryKey } from '../../../queries/query-key';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from '../../../Lib/Axios/index';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../atom/modalState';

export default function MyPageInfo() {
    const [modal, setModal] = useRecoilState(modalState);
    const [nickname, setNickname] = useState('');

    const [statusMessage, setStatusMessage] = useState('');
    const { data, refetch } = useQuery({
        queryKey: queryKey.user.user(),
        queryFn: async () => axios.get('/user').then((res) => res.data),
    });
    console.log(data);
    console.log(nickname, statusMessage);

    const infoBtn = useMutation(
        (body: { profileUrl: string; nickName: string; aboutMe: string }) =>
            axios
                .patch(
                    '/user',
                    {
                        profileUrl: body.profileUrl,
                        nickname: body.nickName,
                        aboutMe: body.aboutMe,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Credentials': 'true',
                        },
                    },
                )
                .then(() => {
                    setModal({
                        ...modal,
                        content: '회원정보가 수정되었습니다.',
                        confirm: '확인',
                        modalOpen: true,
                        url: '',
                    });
                    refetch();
                }),
    );
    useEffect(() => {
        if (data) {
            setNickname(data.nickname);
            setStatusMessage(data.aboutMe);
        }
    }, [data]);
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
                            firstValue={nickname ?? null}
                            defaultValue={nickname ?? null}
                            placeholder="축구조아"
                            setValue={setNickname}
                        />
                        <Input
                            type="text"
                            firstValue={statusMessage ?? null}
                            defaultValue={statusMessage ?? null}
                            placeholder="상태메시지를 입력하세요"
                            setValue={setStatusMessage}
                        />
                        <Input
                            type="text"
                            firstValue={data ? data.email : null}
                            // defaultValue={statusMessage ?? null}
                            placeholder="zzanggu@gmail.com"
                            disabled={true}
                        />
                    </div>
                </div>
                <button
                    type="button"
                    className="mypage-submit-button button-blue"
                    onClick={() =>
                        infoBtn.mutate({
                            profileUrl: 'default',
                            nickName: nickname,
                            aboutMe: statusMessage,
                        })
                    }
                >
                    수정
                </button>
            </div>
        </div>
    );
}
