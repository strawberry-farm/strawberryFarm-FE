import { useEffect, useState } from 'react';
import { SignupRegexProps } from './Signup.interface';
import {
    validateEmail,
    validateOnlyString,
    validatePassword,
} from '../../hooks/regex';

export default function SignUpRegex({
    email,
    password,
    passwordConfirm,
    nickName,
    empty,
    register,
}: SignupRegexProps) {
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
        nickName &&
            !validateOnlyString(nickName) &&
            setRegexText('특수문자를 제외한 2자 이상 6자 이하로 입력해주세요.');

        nickName && validateOnlyString(nickName) && setRegexText('');
    }, [nickName]);

    useEffect(() => {
        empty && setRegexText('이메일을 입력해 주세요.');
    }, [empty]);

    useEffect(() => {
        register &&
            setRegexText('이미 가입한 이메일입니다. 다시 입력해 주세요.');
    }, [register]);

    return <div className="signup-form-regex">{regexText}</div>;
}
