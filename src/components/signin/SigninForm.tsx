import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../@common/input/Input';
import SigninRegex from './SigninRegex';
import { useMutation } from '@tanstack/react-query';
import axios from '../../Lib/Axios';

export default function SigninForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isInput, setIsInput] = useState<boolean>(true);
    const [match, setMatch] = useState<boolean>(true);

    const loginBtn = useMutation((body: { email: string; password: string }) =>
        axios
            .post(
                '/auth/login',
                {
                    email: body.email,
                    password: body.password,
                    expiredTime: 2000,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': 'true',
                    },
                    withCredentials: false, // 쿠키 cors 통신 설정
                },
            )
            .then((res: any) => {
                console.log(res, 'resss');
                if (res.message === 'Success') {
                    //token 쿠키에 저장
                    
                    const localStorageJwt: any = JSON.stringify(
                        res.data.accessToken,
                    );
                    localStorage.setItem('jwt', localStorageJwt);
                    // navigate('/');
                } else {
                    setMatch(false);
                }
            }),
    );

    const goToLogin = () => {
        !email || (!password && setIsInput(false));
        console.log(email, password);

        loginBtn.mutate({ email, password });
    };

    const goToPage = (url: string) => {
        navigate(url);
    };

    return (
        <div className="signin-form">
            <div className="signin-form-title">로그인</div>
            <div className="signin-form-input-area">
                <SigninRegex
                    email={email}
                    password={password}
                    isInput={isInput}
                    match={match}
                />
                <Input
                    type="text"
                    placeholder="이메일"
                    setValue={setEmail}
                    disabled={false}
                />
                <Input
                    type="password"
                    placeholder="비밀번호"
                    setValue={setPassword}
                    disabled={false}
                />
            </div>
            <div className="signin-form-button-area">
                <button
                    type="button"
                    className="common-button"
                    onClick={goToLogin}
                >
                    로그인
                </button>
                <img
                    className="signin-form-kakao-button"
                    src="/images/common/kakao-login.png"
                />
            </div>
            <div className="signin-form-sub-area">
                <p
                    className="signin-form-sub-content"
                    onClick={() => {
                        goToPage('/signup');
                    }}
                >
                    아직 계정이 없으신가요? <span>회원가입</span>
                </p>
                <p
                    className="signin-form-sub-content"
                    onClick={() => {
                        goToPage('/password-reset');
                    }}
                >
                    비밀번호 재설정
                </p>
            </div>
        </div>
    );
}
