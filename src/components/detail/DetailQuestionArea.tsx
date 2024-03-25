import DetailQuestion from './DetailQuestion';
import { DetailProps, QnaProps } from './Detail.interface';
import { useState } from 'react';
import { modalState } from '../../atom/modalState';
import { useRecoilState } from 'recoil';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '../../Lib/Axios/index';
import { queryKey } from '../../queries/query-key';
import { useNavigate } from 'react-router-dom';

export default function DetailQuestionArea({ data }: DetailProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const jwt = localStorage.getItem('jwt');
    const navigator = useNavigate();

    const [input, setInput] = useState<string>();
    const [checked, setChecked] = useState<boolean>(false);

    const [modal, setModal] = useRecoilState(modalState);
    const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(input);

        setInput(e.target.value);
    };

    const onChangeChecked = () => {
        setChecked(!checked);
    };
    console.log(data, 'datas');
    const queryClient = useQueryClient();
    const onComment = useMutation(() =>
        axios
            .post(
                '/boards/qna',
                {
                    boardsId: data.boardId,
                    contents: input,
                    status: data.status === 'Y' ? true : false,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': 'true',
                    },
                },
            )
            .then(() => {
                queryClient.invalidateQueries(
                    queryKey.contents.postId(data.boardId),
                );
                setModal({
                    ...modal,
                    content: '등록 완료되었습니다.',
                    confirm: '확인',
                    modalOpen: true,
                    url: '',
                });
            }),
    );

    return (
        <div className="detail-question-area">
            <h1 className="detail-question-title">문의</h1>
            <div className="detail-question-container">
                {data.qnas.map((question: QnaProps) => {
                    return (
                        <DetailQuestion
                            question={question}
                            writerId={question.qnaId}
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
                    <button
                        className="detail-question-apply-button"
                        onClick={() => {
                            if (!jwt) {
                                navigator('/signin');
                            } else {
                                onComment.mutate();
                            }
                        }}
                    >
                        문의하기
                    </button>
                </div>
            </div>
        </div>
    );
}
