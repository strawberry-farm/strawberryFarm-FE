export interface DetailLeftSideProps {
    setHeight: React.Dispatch<React.SetStateAction<string>>;
}

export interface DetailRightSideProps {
    height: string;
}

export interface DetailContentMapProps {
    latitude: number;
    longitude: number;
}

export interface DetailQuestionProps {
    question: QuestionProps;
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
