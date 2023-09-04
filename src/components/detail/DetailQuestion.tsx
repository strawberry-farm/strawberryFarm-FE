import { customUserImage } from '../../hooks/utils';
import { DetailQuestionProps } from './Detail.interface';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../atom/modalState';
import Portal from '../@common/modal/portal/Portal';
import ConfirmModal from '../@common/modal/ConfirmModal';

export default function DetailQuestion({
    question,
    writerId,
}: DetailQuestionProps) {
    const { userId, profile, nickName, contents, secret, comments } = question;
    const [modal, setModal] = useRecoilState(modalState);
    const [open, setOpen] = useState<boolean>(false);
    const loginId = 6;

    const openComment = () => {
        !open && setOpen(true);
        !!open && setOpen(false);

        if (userId === loginId) {
            return;
        } else if (writerId === loginId) {
            return;
        } else secret && restrictOpenComment();
    };

    const restrictOpenComment = () => {
        setModal({
            ...modal,
            content: '비공개된 문의는 답변을 확인할 수 없습니다.',
            confirm: '확인',
            modalOpen: true,
            url: '',
        });
        setOpen(false);
    };

    const applyComment = () => {
        //문의 답변 전송하는 API
    };

    return (
        <div className="detail-question-group">
            <div className="detail-question-content-group">
                <div className="detail-question-user-group">
                    <img
                        className="detail-question-user-image"
                        src={customUserImage(`${profile}`)}
                    ></img>
                    <span className="detail-question-user-name">
                        {nickName}
                    </span>
                </div>
                <div className="detail-question-desc-group">
                    {userId !== loginId ? (
                        <p
                            className={`detail-question-desc ${
                                writerId !== loginId && secret ? 'private' : ''
                            }`}
                        >
                            {writerId !== loginId && secret
                                ? '비공개된 문의 입니다.'
                                : contents}
                        </p>
                    ) : (
                        <p className="detail-question-desc">{contents}</p>
                    )}
                    {writerId === loginId && !comments && (
                        <button
                            className={`detail-question-button ${
                                open ? '' : 'active'
                            }`}
                            onClick={openComment}
                        >
                            {open ? '답변 닫기' : '답변 하기'}
                        </button>
                    )}
                    {writerId === loginId && comments && (
                        <button
                            className="detail-question-button"
                            onClick={openComment}
                        >
                            {open ? '답변 닫기' : '답변 보기'}
                        </button>
                    )}
                    {writerId !== loginId && comments && (
                        <button
                            className={`detail-question-button ${
                                userId !== loginId && secret ? 'private' : ''
                            }`}
                            onClick={openComment}
                        >
                            {open ? '답변 닫기' : '답변 보기'}
                        </button>
                    )}
                </div>
            </div>
            {open && (
                <div className="detail-question-comment-group">
                    <textarea
                        className="detail-question-textarea"
                        placeholder="문의에 대한 답글을 작성해 주세요."
                        defaultValue={comments && comments}
                        readOnly={comments ? true : false}
                    ></textarea>
                    {writerId === loginId && !comments && (
                        <button
                            className="comment-success-button"
                            onClick={applyComment}
                        >
                            답변 완료
                        </button>
                    )}
                </div>
            )}
            {modal.modalOpen && (
                <Portal>
                    <ConfirmModal />
                </Portal>
            )}
        </div>
    );
}
