import { useComponentModal } from '../../../hooks/useComponentModal';

export default function ComponentModal() {
	const { closeComponentModal, modalDataState } = useComponentModal();
	if (modalDataState.isOpen) {
		return (
			<div
					className="modal-background"
					onClick={closeComponentModal}
			>
					<div className="modal-container">
							<div className="modal-wrapper">
									<div className="modal-contents">
											{modalDataState.content}
									</div>
							</div>
					</div>
			</div>
		);
	}
}