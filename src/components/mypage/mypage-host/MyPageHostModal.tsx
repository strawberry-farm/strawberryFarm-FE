export default function MyPageHostModal() {
    return (
        <div className="mypage-host-modal">
            <div className="mypage-host-modal-title">신청 목록</div>
            <ul className="list">
                <li className="item">
                    <a>
                        <div className="">
                            <div className="profile">
                                <img src="" alt="" />
                            </div>
                            <div className="title">용날두님의 신청서</div>
                            <div className="button-wrapper">
                                <button type="button">수락</button>
                                <button type="button">거절</button>
                            </div>
                        </div>
                    </a>
                    <div className="detail">
                        <div className="question">
                            <div className="question-mark">
                                <img src="" alt="" />
                            </div>
                            <div className="question-text">
                                안녕하세요 자기소개 부탁드려요!
                            </div>
                        </div>
                        <div className="answer">
                            <div className="answer-profile">
                                <img src="" alt="" />
                            </div>
                            <div className="answer-text">
                                용산 사는 호날두입니다.
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
