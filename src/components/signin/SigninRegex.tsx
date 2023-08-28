import { useEffect, useState } from 'react';
import { SigninRegexProps } from './Signin.interface';
import { validateEmail } from '../../hooks/regex';

export default function SigninRegex({
    email,
    password,
    match,
}: SigninRegexProps) {
    const [regexText, setRegexText] = useState<string>('');

    useEffect(() => {
        email === undefined && password === undefined && setRegexText('');

        email &&
            !validateEmail(email) &&
            setRegexText('잘못된 이메일 형식입니다.');

        password &&
            email &&
            !validateEmail(email) &&
            setRegexText('잘못된 이메일 형식입니다.');

        email &&
            validateEmail(email) &&
            !password &&
            setRegexText('이메일 또는 비밀번호를 입력해주세요.');

        password &&
            !email &&
            setRegexText('이메일 또는 비밀번호를 입력해주세요.');

        email && validateEmail(email) && password && setRegexText('');

        // !match && setRegexText('이메일 또는 비밀번호가 일치하지 않습니다.');
    }, [email, password, match]);

    return <div className="signin-form-regex">{regexText}</div>;
}
