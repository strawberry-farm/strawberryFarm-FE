import { useEffect, useRef, useState } from 'react';
import '../../styles/layout/header/_header.scss';
import { SearchIsProps, Situation } from './Header.interface';
import SearchTag from '../@common/SearchTag/searchTag';
import { useNavigate } from 'react-router-dom';
import useFocus from '../../hooks/useFocus';
import { UserDropDown } from '../@common/DropDown/dropdown';
const demmy = [
    {
        sidoName: '서울',
        sigungu: [
            {
                sigunguName: '서울 전체',
                bCode: 11000,
            },
            {
                sigunguName: '종로구',
                bCode: 11110,
            },
        ],
    },
    {
        sidoName: '경기',
        sigungu: [
            {
                sigunguName: '경기 전체',
                bCode: 4100000000,
            },
            {
                sigunguName: '성남시',
                bCode: '4130000000',
            },
        ],
    },
];

const Header = () => {
    const navigate = useNavigate();
    const searchRef = useRef<HTMLDivElement>(null);
    const { ref, isFocused } = useFocus(false);
    const [isMemu, setIsMemu] = useState<Situation>({
        user: false,
        alarm: false,
        guest: false,
    });
    // const [isRegion, setIsRegion] = useState(false);
    const [isSearch, setIsSearch] = useState<SearchIsProps>({
        region: 'basic',
        dayAndTime: 'basic',
        localAndTitle: 'basic',
    });
    useEffect(() => {
        // 검색창 백그라운드 컬러 변경
        if (
            isFocused ||
            isSearch.region === 'actives' ||
            isSearch.dayAndTime === 'actives'
        ) {
            searchRef.current?.style.setProperty('background-color', '#F2F2F2');
        } else if (!isFocused) {
            if (
                isSearch.region === 'actives' ||
                isSearch.dayAndTime === 'actives'
            )
                return;
            searchRef.current?.style.setProperty('background-color', '#ffffff');
        }
    }, [isFocused, isSearch.dayAndTime, isSearch.region]);

    const searchOnclickHandler = (e: React.MouseEvent) => {
        // 검색바 태그
        const name = e.target as HTMLDivElement;
        if (name.className.includes('region')) {
            if (isSearch.region === 'basic') {
                setIsSearch({
                    ...isSearch,
                    region: 'actives',
                    dayAndTime: 'basic',
                });
            } else {
                setIsSearch({ ...isSearch, region: 'basic' });
            }
        }
        if (name.className.includes('dayAndTime')) {
            console.log('o2');
            if (isSearch.dayAndTime === 'basic') {
                setIsSearch({
                    ...isSearch,
                    dayAndTime: 'actives',
                    region: 'basic',
                });
            } else {
                setIsSearch({ ...isSearch, dayAndTime: 'basic' });
            }
        }
    };
    console.log(isMemu, '메뉴');

    const jwt = true; // 임시
    return (
        <header className="headers">
            <div className="headLayout">
                <div className="headersLogo" onClick={() => navigate('/')}>
                    <img src="./icons/personRunning.png" alt="logo" />
                    <span>둘이서</span>
                </div>
                <div className="searchLayout">
                    <div
                        className="search"
                        onClick={searchOnclickHandler}
                        ref={searchRef}
                    >
                        <SearchTag
                            className={'region'}
                            onClickProps={isSearch.region}
                        >
                            지역{' '}
                        </SearchTag>
                        {isSearch.region.includes('basic') &&
                            isSearch.dayAndTime.includes('basic') && (
                                <span className="stick">|</span>
                            )}
                        {/* <div className="region"></div> */}
                        <SearchTag
                            className={'dayAndTime'}
                            onClickProps={isSearch.dayAndTime}
                        >
                            요일·시간대{' '}
                        </SearchTag>
                        {isSearch.dayAndTime.includes('basic') && (
                            <span className="stick">|</span>
                        )}
                        <input
                            className="searchInp"
                            placeholder="모임을 검색해 보세요!"
                            ref={ref}
                        />
                        <div className="searchIconBtn">
                            <img src="./icons/searchIcon.png" alt="검색버튼" />
                        </div>
                    </div>
                </div>
                <div className="userTool">
                    {!jwt && (
                        <img
                            onClick={() =>
                                setIsMemu({ ...isMemu, guest: !isMemu.guest })
                            }
                            className="memu"
                            src="./icons/memu.png"
                            alt="사용자메뉴"
                        />
                    )}
                    {jwt && (
                        <>
                            <img
                                onClick={() =>
                                    setIsMemu({
                                        ...isMemu,
                                        alarm: !isMemu.alarm,
                                    })
                                }
                                className="alarm"
                                src="./icons/alarm.png"
                                alt="알림"
                            />
                            <img
                                onClick={() =>
                                    setIsMemu({ ...isMemu, user: !isMemu.user })
                                }
                                className="userIcon"
                                src="./icons/userIcon.png"
                                alt="유저메뉴"
                            />
                        </>
                    )}
                    {isMemu && <UserDropDown jwt={jwt} situation={isMemu} />}
                </div>
            </div>
        </header>
    );
};

export default Header;
