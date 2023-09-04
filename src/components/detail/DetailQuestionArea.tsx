import DetailQuestion from './DetailQuestion';
import { QUESTION_DATA } from './../../../public/data/question_data';
import { QuestionProps } from './Detail.interface';
import { useState } from 'react';

export default function DetailQuestionArea() {
    const [input, setInput] = useState<string>();
    const [checked, setChecked] = useState<boolean>(false);
    const writerId = 6;

    const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
