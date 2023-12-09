export default function MyPageHostModal() {
    return (
        <div className="mypage-host-modal">
            <div className="mypage-host-modal-title">신청 목록</div>
            <ul className="mypage-host-modal-list">
                <li className="mypage-host-modal-item">
                    <a>
                        <div className="mypage-host-modal-application ">
                            <div className="mypage-host-modal-icon">
                                <img
                                    src="/images/icons/user-solid.png"
                                    alt=""
                                />
                            </div>
                            <div className="mypage-host-modal-application-title">
                                용날두님의 신청서
                            </div>
                            <div className="mypage-host-modal-application-button-wrapper">
                                <button
                                    type="button"
                                    className="mypage-host-modal-application-button button-basic"
                                >
                                    수락
                                </button>
                                <button
                                    type="button"
                                    className="mypage-host-modal-application-button"
                                >
                                    거절
                                </button>
                            </div>
                        </div>
                    </a>
                    <div className="mypage-host-modal-detail">
                        <div className="mypage-host-modal-question">
                            <div className="mypage-host-modal-icon">
                                <img
                                    src="/images/icons/question-solid.png"
                                    alt=""
                                />
                            </div>
                            <div className="mypage-host-modal-question-text">
                                안녕하세요 자기소개 부탁드려요!
                            </div>
                        </div>
                        <div className="mypage-host-modal-answer">
                            <div className="mypage-host-modal-icon">
                                <img
                                    src="/images/icons/answer-solid.png"
                                    alt=""
                                />
                            </div>
                            <div className="mypage-host-modal-answer-text">
                                용산 사는 호날두입니다.
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
