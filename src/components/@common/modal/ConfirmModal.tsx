import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../atom/modalState';
import { useNavigate } from 'react-router';

export default function ConfirmModal() {
    const navigate = useNavigate();
    const modalRef = useRef<HTMLDivElement>(null);
    const [modal, setModal] = useRecoilState(modalState);

    const closeModal = () => {
        setModal({ ...modal, modalOpen: false });
        modal.confirm === '로그인하러 가기' && navigate(`${modal.url}`);
    };

    const modalOutSideClick = (e: any) => {
        if (modalRef.current === e.target) {
            closeModal();
        }
    };
    return (
        <div
            className="modal-background"
            ref={modalRef}
            onClick={(e) => modalOutSideClick(e)}
        >
            <div className="modal-container">
                <div className="modal-wrapper">
                    <div className="modal-contents">{modal.content}</div>
                    <button
                        className="modal-confirm-button"
                        onClick={() => closeModal()}
                    >
                        {modal.confirm}
                    </button>
                </div>
            </div>
        </div>
    );
}
