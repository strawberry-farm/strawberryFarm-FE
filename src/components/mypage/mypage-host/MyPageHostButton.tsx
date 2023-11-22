import { useComponentModal } from '../../../hooks/useComponentModal';
import MyPageHostModal from './MyPageHostModal';

export default function MyPageHostButton() {

    const {openComponentModal} = useComponentModal();
    return (
        <div className="mypage-list-item-button-wrapper">
            <button type="button" className="button button-basic">
                채팅하기
            </button>
            <button type="button" className="button button-blue" onClick={() => openComponentModal(<MyPageHostModal />)}>
                신청목록
            </button>
        </div>
    );
}
