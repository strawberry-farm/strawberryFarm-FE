import { useState } from 'react';
import '../../styles/layout/header/_header.scss';
import { SearchIsProps } from './Header.interface';
const Header = () => {
    const [isSearch, setIsSearch] = useState<SearchIsProps>({
        region: false,
        dayAndTime: false,
        localAndTitle: false,
    });
    const jwt = false;
    return (
        <header className="headers">
            <div className="headLayout">
                <div className="headersLogo">
                    <img src="./icons/personRunning.png" alt="logo" />
                    <span>둘이서</span>
                </div>
                <div className="searchLayout">
                    <div className="search">
                        <div className="region">
                            지역 <span>|</span>
                        </div>
                        <div className="dayAndTime">
                            요일·시간대 <span>|</span>
                        </div>
                        <input placeholder="모임을 검색해 보세요!" />
                    </div>
                </div>
                <div className="userTool">
                    {jwt && (
                        <img
                            className="memu"
                            src="./icons/memu.png"
                            alt="사용자메뉴"
                        />
                    )}
                    {!jwt && (
                        <>
                            <img
                                className="alarm"
                                src="./icons/alarm.png"
                                alt="알림"
                            />
                            <img
                                className="userIcon"
                                src="./icons/userIcon.png"
                                alt="유저메뉴"
                            />
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
