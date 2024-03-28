export interface DetailLeftSideProps {
    setHeight: React.Dispatch<React.SetStateAction<string>>;
    data: DetailDataProps;
}
export interface QnaProps {
    comment: null | string;
    contents: string;
    nickName: string;
    profile: string;
    qnaId: number;
    status: boolean;
    //
    userId: number;
    secret: boolean;
    comments: string;
}
export interface DetailDataProps {
    b_code: string;
    boardId: number;
    city: string;
    contents: string;
    days: string;
    district: string;
    fieldId: number;
    fieldName: string;
    headcount: number;
    images: [];
    latitude: string;
    location: string;
    longitude: string;
    nickname: string;
    owner: boolean;
    participantCount: number;
    qnas: QnaProps[];
    question: string;
    status: string;
    tags: [];
    times: string;
    title: string;
    wishId: null;
    wishState: boolean;
}
export interface DetailProps {
    data: DetailDataProps;
}

export interface DetailRightSideProps {
    height: string;
    wish: boolean;
    wishId: number | undefined | null;
}

export interface DetailContentMapProps {
    latitude: number;
    longitude: number;
}

export interface DetailQuestionProps {
    question: QnaProps;
    writerId: number;
}

export interface QuestionProps {
    qnaId: number;
    userId: number;
    profile: string;
    nickName: string;
    contents: string;
    secret: boolean;
    comments: string;
}
