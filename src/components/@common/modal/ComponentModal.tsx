import { useComponentModal } from '../../../hooks/useComponentModal';

export default function ComponentModal() {
    const { closeComponentModal, modalDataState } = useComponentModal();
    if (modalDataState.isOpen) {
        return (
            <div
                className="modal-background"
                onClick={(e) => closeComponentModal(e)}
            >
                <div className="component-modal-container">
                    <div className="modal-wrapper">
                        <div className="component-modal-contents">
                            {modalDataState.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
