import { useEffect, useState } from 'react';
import Input from '../../@common/input/Input';
import { queryKey } from '../../../queries/query-key';
import { useQuery } from '@tanstack/react-query';
// import axios from '../../../Lib/Axios/index';
import axios from 'axios';
export default function MyPageInfo() {
    const [nickname, setNickname] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    // const { data } = useQuery({
    //     queryKey: queryKey.user.user(),
    //     queryFn: async () =>
    //         axios
    //             .get('/user', {
    //                 withCredentials: true,
    //                 headers: {
    //                     Authorization:
    //                         'Bearer :' + localStorage.getItem('accessToken'),
    //                 },
    //             })
    //             .then((res) => res.data),
    // });
    useEffect(() => {
        getuser();
    }, []);
    function getuser() {
        const jwt = localStorage.getItem('jwt')
            ? localStorage.getItem('jwt')
            : null;
        const isString = `Bearer :` + jwt;
        const not = isString.replace('"', '');
        const notTwo = not.replace('"', '');
        console.log(jwt, 'jwt');

        axios
            .get('https://strawberryfarm.shop/user', {
                withCredentials: true,
                headers: {
                    Authorization: notTwo,
                },
            })
            .then(function (response) {
                console.log(response);
                // document.getElementById('email-get-user').value = response.data.data.email;
                // document.getElementById('profileurl').value = response.data.data.profileUrl;
                // document.getElementById('nickname-get-user').value = response.data.data.nickname;
                // document.getElementById('aboutme-get-user').value = response.data.data.aboutMe;
            })
            .catch(function (error) {
                console.error(error);
            });
    }

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
