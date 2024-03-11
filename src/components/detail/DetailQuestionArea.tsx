import DetailQuestion from './DetailQuestion';
import { QuestionProps } from './Detail.interface';
import { useState } from 'react';
const QUESTION_DATA = [
    {
        qnaId: 1,
        userId: 4,
        profile: '',
        nickName: '나는야메시',
        contents: '매주 모이는 건가요?',
        secret: true,
        comments: '우선은 그렇게 생각하고 있습니다.',
    },
    {
        qnaId: 2,
        userId: 3,
        profile: '',
        nickName: '축구킹',
        contents: '성비가 어떻게 되나요?',
        secret: false,
        comments: '',
    },
    {
        qnaId: 3,
        userId: 6,
        profile: '',
        nickName: '아이러브사커',
        contents: '모임 분위기는 어떤가요?',
        secret: true,
        comments: '',
    },
    {
        qnaId: 4,
        userId: 5,
        profile: '',
        nickName: '하하하',
        contents: '모임 분위기는 어떤가요?',
        secret: false,
        comments: '아주 좋아요',
    },
];
export default function DetailQuestionArea() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [input, setInput] = useState<string>();
    const [checked, setChecked] = useState<boolean>(false);
    const writerId = 6;

    const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(input);

        setInput(e.target.value);
    };

    const onChangeChecked = () => {
        setChecked(!checked);
    };

    return (
        <div className="detail-question-area">
            <h1 className="detail-question-title">문의</h1>
            <div className="detail-question-container">
                {QUESTION_DATA.map((question: QuestionProps) => {
                    return (
                        <DetailQuestion
                            question={question}
                            writerId={writerId}
                            key={question.qnaId}
                        />
                    );
                })}
            </div>
            <div className="detail-question-input-container">
                <textarea
                    className="detail-question-input"
                    placeholder="문의할 내용을 작성해 주세요."
                    onChange={onChangeInput}
                ></textarea>
                <div className="detail-question-select-group">
                    <div className="detail-question-checkbox">
                        <label>
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={onChangeChecked}
                            ></input>
                            비공개
                        </label>
                    </div>
                    <button className="detail-question-apply-button">
                        문의하기
                    </button>
                </div>
            </div>
        </div>
    );
}
