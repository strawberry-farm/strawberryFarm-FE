const getAuthKey = () => {
    const endpoint = 'auth';
    const kakaoEndpoint = 'kakao';
    return {
        signup: [endpoint, 'signup'],
        emailRequest: [endpoint, 'email-request'],
        emailConfirm: [endpoint, 'email-confirm'],
        login: [endpoint, 'login'],
        kakaoLogin: [endpoint, kakaoEndpoint, 'login'],
        kakaoCallback: [endpoint, kakaoEndpoint, 'callback'],
        passwordRequest: [endpoint, 'password-request'],
        passwordConfirm: [endpoint, 'password-confirm'],
        passwordEdit: [endpoint, 'password-edit'],
        logout: [endpoint, 'logout'],
    };
};
const getUserKey = () => {
    const endponint = 'user';
    const interestArea = 'interestArea';
    const keyword = 'keyword';
    const groups = 'groups';
    return {
        user: () => {
            return [endponint];
        },
        userId: (userId: number) => {
            return [endponint, userId.toString()];
        },
        interestAreaUserID: (userId: number) => {
            return [endponint, interestArea, userId.toString()];
        },
        keywordUserId: (userId: number) => {
            return [endponint, keyword, userId.toString()];
        },
        wishUserId: (userId: number) => {
            return [endponint, 'wish', userId.toString()];
        },
        groupsUserId: (userId: number) => {
            return [endponint, 'wish', userId.toString(), 'status'];
        },
        groupsApplyPostId: (postId: number) => {
            return [endponint, groups, 'apply', postId.toString];
        },
        groupsApply: (userId: number, postId: number) => {
            return [
                endponint,
                groups,
                'apply',
                userId.toString(),
                postId.toString(),
            ];
        },
        groupsApplyAccept: (userId: number, postId: number) => {
            return [
                endponint,
                groups,
                'apply',
                userId.toString(),
                postId.toString(),
                'accept',
            ];
        },
        groupsApplyReject: (userId: number, postId: number) => {
            return [
                endponint,
                groups,
                'apply',
                userId.toString(),
                postId.toString(),
                'reject',
            ];
        },
    };
};

const getContentsKey = () => {
    const endponint = 'contents';
    return {
        all: [endponint],
        postId: (postId: number) => {
            return [endponint, postId.toString()];
        },
        search: [endponint, 'search'],
        adminArea: [endponint, 'adminarea'],
    };
};
const getFieldKey = () => {
    const endponint = 'field';
    return {
        all: [endponint],
    };
};
const getPostKey = () => {
    const endponint = 'post';
    return {
        all: [endponint],
        postId: (postId: number) => {
            return [endponint, postId.toString()];
        },
        apply: (userId: number, postId: number) => {
            return [endponint, 'apply', userId.toString(), postId.toString()];
        },
        qna: [endponint, 'qna'],
        comment: [endponint, 'qna', 'comment'],
        wish: [endponint, 'wish'],
        wishDisabled: (userId: number, postId: number) => {
            return [endponint, 'wish', userId.toString(), postId.toString()];
        },
    };
};
// react-query query-key
export const queryKey = {
    // auth 로그인 관련
    auth: getAuthKey(),
    // user 유저 관련
    user: getUserKey(),
    // 메인 콘텐츠 요청
    contents: getContentsKey(),
    // 분야 리스트 요청
    field: getFieldKey(),
    // 게시글 등록
    post: getPostKey(),
};
