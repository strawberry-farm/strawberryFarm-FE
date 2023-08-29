export const validateEmail = (email: string) => {
    const emailRegex =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/;
    return passwordRegex.test(password);
};

export const validateMark = (content: string) => {
    const markRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    return markRegex.test(content);
};

export const validateOnlyString = (content: string) => {
    const onlyStringRegex = /^[ㄱ-ㅎ가-힣a-zA-Z].{1,5}$/;
    return onlyStringRegex.test(content);
};
