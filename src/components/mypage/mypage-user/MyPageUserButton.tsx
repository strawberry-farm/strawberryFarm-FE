export default function MyPageUserButton() {
    return (
        <div className="mypage-list-item-button-wrapper">
            {/* 참여 중 */}
            <button type="button" className="button button-basic">
                채팅하기
            </button>
            <button type="button" className="button button-blue">
                탈퇴하기
            </button>
            {/* 대기 중 */}
            {/* <button type="button" className="button button-basic">
                신청취소
            </button>
            <button type="button" className="button button-blue">
                내신청서
            </button> */}
        </div>
    );
}
