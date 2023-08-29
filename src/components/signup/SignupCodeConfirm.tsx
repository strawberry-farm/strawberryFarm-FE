import { useEffect, useState, useRef } from 'react';
import { SignupCodeConfirmProps } from './Signup.interface';

export default function SignupCodeConfirm({
    success,
    active,
    setActive,
    timer,
    setTimer,
}: SignupCodeConfirmProps) {
    const [message, setMessage] = useState<string>('');
    const [minute, setMinute] = useState<number>(2);
    const [second, setSecond] = useState<number>(59);
    const timerId = useRef<any>(null);
    const SIZE = 2;

    const padStart = (nums: number) => {
        return nums.toString().padStart(SIZE, '0');
    };

    useEffect(() => {
        timerId.current = setInterval(() => {
            setMinute(Math.floor(timer / 60));
            setSecond(timer % 60);
            setTimer(timer - 1);
        }, 1000);

        return () => clearInterval(timerId.current);
    }, [timer]);

    useEffect(() => {
        if (timer < 0) {
            clearInterval(timerId.current);
            setActive(false);
        }
    }, [second, timer]);

    useEffect(() => {
        success === 'progressing' &&
            setMessage(`남은 시간 ${padStart(minute)} : ${padStart(second)}`);
        success === 'success' && setMessage('인증이 완료되었습니다.');
        success === 'fail' && setMessage('잘못된 인증번호입니다.');
    }, [success, active, minute, second]);

    return (
        <div className={`signup-form-code-confirm-message ${success}`}>
            {message}
        </div>
    );
}
