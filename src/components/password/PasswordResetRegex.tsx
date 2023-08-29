import { useEffect, useState } from 'react';
import { PasswordResetRegexProps } from './PasswordReset.interface';
import { validateEmail, validatePassword } from '../../hooks/regex';

export default function PasswordResetRegex({
    email,
    password,
    passwordConfirm,
    empty,
}: PasswordResetRegexProps) {
    const [regexText, setRegexText] = useState<string>('');

    useEffect(() => {
        email &&
            !validateEmail(email) &&
            setRegexText('잘못된 이메일 형식입니다.');

        email && validateEmail(email) && setRegexText('');
    }, [email]);

    useEffect(() => {
        password &&
            !validatePassword(password) &&
            setRegexText('영문, 숫자 포함 8자 이상으로 입력해 주세요.');

        password && validatePassword(password) && setRegexText('');

        password &&
            passwordConfirm &&
            password !== passwordConfirm &&
            setRegexText('입력한 비밀번호가 일치하지 않습니다.');
    }, [password, passwordConfirm]);

    useEffect(() => {
        empty && setRegexText('이메일을 입력해 주세요.');
    }, [empty]);

    return <div className="password-reset-form-regex">{regexText}</div>;
}
