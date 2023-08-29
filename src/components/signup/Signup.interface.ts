export interface SignupRegexProps {
    email: string | undefined;
    password: string | undefined;
    passwordConfirm: string | undefined;
    nickName: string | undefined;
    empty: boolean;
    register: boolean;
}

export interface SignupCodeConfirmProps {
    success: string;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    timer: number;
    setTimer: React.Dispatch<React.SetStateAction<number>>;
}
