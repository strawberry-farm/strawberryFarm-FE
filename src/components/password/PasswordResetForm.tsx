import { useState } from 'react';
import Input from '../@common/input/Input';
import PasswordResetRegex from './PasswordResetRegex';
import { useRecoilState } from 'recoil';
import { modalState } from '../../atom/modalState';
import Portal from '../@common/modal/portal/Portal';
import ConfirmModal from '../@common/modal/ConfirmModal';
import CodeConfirm from '../@common/codeConfirm/CodeConfirm';

export default function PasswordResetForm() {
    const [modal, setModal] = useRecoilState(modalState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [code, setCode] = useState('');
    const [empty, setEmpty] = useState<boolean>(false);
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
            url: '',
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

    const completePasswordReset = () => {
        setModal({
            content: '비밀번호 수정이 완료되었습니다.',
            confirm: '확인',
            modalOpen: true,
            url: '/signin',
        });
    };
    return (
        <div className="password-reset-form">
            <div className="password-reset-form-title">비밀번호 재설정</div>
            <div className="password-reset-form-input-area">
                <PasswordResetRegex
                    email={email}
                    password={password}
                    passwordConfirm={passwordConfirm}
                    empty={empty}
                />
                <div className="password-reset-form-email-group">
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
                    <div className="password-reset-form-code-confirm-group">
                        {success !== 'success' && (
                            <div className="password-reset-form-code-confirm">
                                <Input
                                    placeholder="인증코드를 입력하세요."
                                    type="text"
                                    setValue={setCode}
                                    disabled={false}
                                />
                                <button
                                    type="button"
                                    className="code-certificate-button"
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
                        <CodeConfirm
                            success={success}
                            active={active}
                            setActive={setActive}
                            timer={timer}
                            setTimer={setTimer}
                        />
                    </div>
                )}
                <Input
                    placeholder="새로운 비밀번호를 입력하세요"
                    type="password"
                    setValue={setPassword}
                    disabled={false}
                />
                <Input
                    placeholder="새로운 비밀번호를 한번 더 입력하세요"
                    type="password"
                    setValue={setPasswordConfirm}
                    disabled={false}
                />
            </div>
            <button
                type="button"
                className="password-reset-form-button"
                disabled={email && password && passwordConfirm ? false : true}
                onClick={completePasswordReset}
            >
                비밀번호 수정 완료
            </button>
            {modal.modalOpen && (
                <Portal>
                    <ConfirmModal />
                </Portal>
            )}
        </div>
    );
}
