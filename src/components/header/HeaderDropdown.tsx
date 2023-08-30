import { Situation } from './Header.interface';

export const UserDropDown = (props: { jwt: boolean; situation: Situation }) => {
    const userMemu = [
        '내모임',
        '내채팅방',
        '위시리스트',
        '운영중인 모임',
        '로그아웃',
    ];
    const guestMemu = ['로그인', '회원가입'];
    if (props.situation.user === true) {
        return (
            <>
                <div className="dropdownLayout">
                    <div className="dropdownLow">
                        {userMemu.map((item, idx) => {
                            return (
                                <div className="dropdown" key={idx}>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
    if (props.situation.guest === true) {
        return (
            <div className="dropdownLayout">
                <div className="dropdownLow">
                    {guestMemu.map((item, idx) => {
                        return (
                            <div className="dropdown" key={idx}>
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    if (props.situation.alarm) {
        return (
            <div className="dropdownLayout">
                <div className="alarmLayout">
                    <div className="alarmTitle">
                        <img src={'./icons/alarm.png'} alt="알림로고" />
                        알림
                    </div>
                    <div className="alarmLow">
                        <div className="alarmText">
                            <div className="text">
                                내가 신청한 모임 참여 수락되었습니다.
                            </div>
                            <img src="./icons/cancel.png" />
                        </div>
                    </div>
                    <div className="alarmLow">
                        <div className="alarmText">
                            <div className="text">
                                내가 신청한 모임 참여 수락되었습니다.
                            </div>
                            <img src="./icons/cancel.png" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
