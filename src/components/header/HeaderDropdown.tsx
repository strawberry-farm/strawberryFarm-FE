import { useNavigate } from 'react-router-dom';
import { Situation } from './Header.interface';

export const UserDropDown = (props: {
    jwt: string | null;
    situation: Situation;
    setSituation: React.Dispatch<React.SetStateAction<Situation>>;
}) => {
    const navigator = useNavigate();
    if (props.situation.user === true) {
        return (
            <>
                <div className="dropdownLayout">
                    <div className="dropdownLow">
                        <div
                            className="dropdown"
                            onClick={() => {
                                props.setSituation({
                                    user: false,
                                    alarm: false,
                                    guest: false,
                                });
                                navigator('/mypage/info');
                            }}
                        >
                            내정보
                        </div>
                        <div className="dropdown">내모임</div>
                        <div className="dropdown">내채팅방</div>
                        <div className="dropdown">위시리스트</div>
                        <div className="dropdown">운영중인 모임</div>
                        <div
                            className="dropdown"
                            onClick={() => {
                                localStorage.removeItem('jwt');
                                props.setSituation({
                                    user: false,
                                    alarm: false,
                                    guest: false,
                                });
                                navigator('/');
                            }}
                        >
                            로그아웃
                        </div>
                    </div>
                </div>
            </>
        );
    }
    const onNav = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        if (target.innerHTML === '로그인') navigator('/signin');
        if (target.innerHTML === '회원가입') navigator('/signup');
        props.setSituation({ user: false, alarm: false, guest: false });
    };
    if (props.situation.guest === true) {
        return (
            <div className="dropdownLayout">
                <div className="dropdownLow">
                    <div className="dropdown" onClick={onNav}>
                        로그인
                    </div>
                    <div className="dropdown" onClick={onNav}>
                        회원가입
                    </div>
                </div>
            </div>
        );
    }
    if (props.situation.alarm) {
        return (
            <div className="dropdownLayout">
                <div className="alarmLayout">
                    <div className="alarmTitle">
                        <img
                            src={'/images/icons/alarm-solid.png'}
                            alt="알림로고"
                        />
                        알림
                    </div>
                    <div className="alarmLow">
                        <div className="alarmText">
                            <div className="text">
                                내가 신청한 모임 참여 수락되었습니다.
                            </div>
                            <img src="/images/icons/cancel-line.png" />
                        </div>
                    </div>
                    <div className="alarmLow">
                        <div className="alarmText">
                            <div className="text">
                                내가 신청한 모임 참여 수락되었습니다.
                            </div>
                            <img src="/images/icons/cancel-line.png" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
