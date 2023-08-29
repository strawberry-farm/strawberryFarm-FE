import { useState } from 'react';
import Input from '../@common/input/Input';
import SignUpRegex from './SignupRegex';
import { useRecoilState } from 'recoil';
import { modalState } from '../../atom/modalState';
import Portal from '../@common/modal/portal/Portal';
import ConfirmModal from '../@common/modal/ConfirmModal';
import SignupCodeConfirm from './SignupCodeConfirm';

export default function SignupForm() {
    const [modal, setModal] = useRecoilState(modalState);
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const [passwordConfirm, setPasswordConfirm] = useState<
        string | undefined
    >();
    const [nickName, setNickname] = useState<string | undefined>();
    const [code, setCode] = useState<string | undefined>();
    const [empty, setEmpty] = useState<boolean>(false);
    const [register, setRegister] = useState<boolean>(false);
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [success, setSuccess] = useState<string>('progressing');
    const [active, setActive] = useState<boolean>(true);
    const [timer, setTimer] = useState<number>(179);

    const sendAuthenticationCode = () => {
        // http 요청 전
        !email && setEmpty(true);

        // http 요청 후 인증 성공
        setModal({
            ...modal,
            content: '인증번호가 전송되었습니다',
            confirm: '확인',
            modalOpen: true,
        });
        setAuthenticating(true);
        setDisabled(true);

        //http 요청 후 이미 가입한 이메일 에러
        // setRegister(true);
    };

    const checkAuthenticationCode = () => {
        //인증 성공하면
        setSuccess('success');

        //인증 실패하면
        // setSuccess("fail")
    };

    const resendEmail = () => {
        setActive(true);
        setTimer(179);
    };

    const completeSignup = () => {
        setModal({
            content: '회원가입이 완료되었습니다',
            confirm: '로그인하러 가기',
            modalOpen: true,
            url: '/signin',
        });
    };

    return (
        <div className="signup-form">
            <div className="signup-form-title">회원가입</div>
            <div className="signup-form-input-area">
                <SignUpRegex
                    email={email}
                    password={password}
                    passwordConfirm={passwordConfirm}
                    nickName={nickName}
                    empty={empty}
                    register={register}
                />
                <div className="signup-form-email-group">
                    <Input
                        placeholder="이메일을 입력하세요"
                        type="text"
                        setValue={setEmail}
                        disabled={disabled}
                    />
                    {!authenticating && (
                        <button
                            type="button"
                            className="email-certificate-button"
                            onClick={sendAuthenticationCode}
                        >
                            인증
                        </button>
                    )}
                </div>
                {authenticating && (
                    <div className="signup-form-code-confirm-group">
                        {success !== 'success' && (
                            <div className="signup-form-code-confirm">
                                <Input
                                    placeholder="인증코드를 입력하세요."
                                    type="text"
                                    setValue={setCode}
                                    disabled={false}
                                />
                                <button
                                    type="button"
                                    className="email-certificate-button"
                                    onClick={
                                        active
                                            ? checkAuthenticationCode
                                            : resendEmail
                                    }
                                >
                                    {active ? '확인' : '재전송'}
                                </button>
                            </div>
                        )}
                        <SignupCodeConfirm
                            success={success}
                            active={active}
                            setActive={setActive}
                            timer={timer}
                            setTimer={setTimer}
                        />
                    </div>
                )}
                <Input
                    placeholder="비밀번호를 입력하세요"
                    type="password"
                    setValue={setPassword}
                    disabled={false}
                />
                <Input
                    placeholder="비밀번호를 한번 더 입력하세요"
                    type="password"
                    setValue={setPasswordConfirm}
                    disabled={false}
                />
                <Input
                    placeholder="닉네임을 설정하세요"
                    type="text"
                    setValue={setNickname}
                    disabled={false}
                />
            </div>
            <button
                type="button"
                className="signup-form-button"
                disabled={
                    email && password && passwordConfirm && nickName
                        ? false
                        : true
                }
                onClick={completeSignup}
            >
                가입 완료
            </button>
            {modal.modalOpen && (
                <Portal>
                    <ConfirmModal />
                </Portal>
            )}
        </div>
    );
}