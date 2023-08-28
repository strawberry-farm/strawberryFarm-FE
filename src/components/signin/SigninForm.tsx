import Input from '../@common/input/Input';
import Button from '../@common/button/Button';
import { useState } from 'react';
import SigninRegex from './SigninRegex';
import { useNavigate } from 'react-router-dom';

export default function SigninForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const [match, setMatch] = useState<boolean>();

    const goToPage = (url: string) => {
        navigate(url);
    };

    console.log(email, password);

    return (
        <div className="signin-form">
            <div className="signin-form-title">로그인</div>
            <div className="signin-form-input-area">
                <SigninRegex email={email} password={password} match={match} />
                <Input type="text" placeholder="이메일" setValue={setEmail} />
                <Input
                    type="password"
                    placeholder="비밀번호"
                    setValue={setPassword}
                />
            </div>
            <div className="signin-form-button-area">
                <Button content="로그인" />
                <img
                    className="signin-form-kakao-button"
                    src="../../../public/icons/kakao-login.png"
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
                        goToPage('/password/reset');
                    }}
                >
                    비밀번호 재설정
                </p>
            </div>
        </div>
    );
}
