import { useEffect, useRef, useState } from 'react';
import {
    LocalTimeProps,
    RegionProps,
    SearchIsProps,
    Situation,
} from './Header.interface';
import { SearchTag } from './HeaderSearchTag';
import { useNavigate } from 'react-router-dom';
import { useFocus } from '../../hooks/useFocus';
import { UserDropDown } from './HeaderDropdown';
import { Region } from './HeaderRegion';
import { HeaderLocalAndTitle } from './HeaderLocalAndTitle';
const demmy: RegionProps[] = [
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
                bCode: 4130000000,
            },
        ],
    },
    {
        sidoName: '인천',
        sigungu: [
            {
                sigunguName: '경기 전체',
                bCode: 4100000000,
            },
            {
                sigunguName: '성남시',
                bCode: 4130000000,
            },
        ],
    },
    {
        sidoName: '대전',
        sigungu: [
            {
                sigunguName: '경기 전체',
                bCode: 4100000000,
            },
            {
                sigunguName: '성남시',
                bCode: 4130000000,
            },
        ],
    },
    {
        sidoName: '충남',
        sigungu: [
            {
                sigunguName: '경기 전체',
                bCode: 4100000000,
            },
            {
                sigunguName: '성남시',
                bCode: 4130000000,
            },
        ],
    },
    {
        sidoName: '세종',
        sigungu: [
            {
                sigunguName: '경기 전체',
                bCode: 4100000000,
            },
            {
                sigunguName: '성남시',
                bCode: 4130000000,
            },
        ],
    },
];

export const Header = () => {
    const searchRef = useRef<HTMLDivElement>(null);
    const navigator = useNavigate();
    const { ref, isFocused } = useFocus(false);
    const [isMemu, setIsMemu] = useState<Situation>({
        user: false,
        alarm: false,
        guest: false,
    });
    const [dayTitle, setDayTitle] = useState<LocalTimeProps>({
        day: '',
        time: '',
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

    const jwt = true; // 임시
    return (
        <>
            <header className="headers">
                <div className="headLayout">
                    <div className="headersLogo" onClick={() => navigator('/')}>
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
                                <img src="./icons/search.png" alt="검색버튼" />
                            </div>
                        </div>
                    </div>
                    <div className="userTool">
                        {!jwt && (
                            <img
                                onClick={() =>
                                    setIsMemu({
                                        guest: !isMemu.guest,
                                        user: false,
                                        alarm: false,
                                    })
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
                                            guest: false,
                                            user: false,
                                            alarm: !isMemu.alarm,
                                        })
                                    }
                                    className="alarm"
                                    src="./icons/alarm.png"
                                    alt="알림"
                                />
                                <img
                                    onClick={() =>
                                        setIsMemu({
                                            ...isMemu,
                                            user: !isMemu.user,
                                        })
                                    }
                                    className="userIcon"
                                    src="./icons/userIcon.png"
                                    alt="유저메뉴"
                                />
                            </>
                        )}
                        {isMemu && (
                            <UserDropDown jwt={jwt} situation={isMemu} />
                        )}
                    </div>
                </div>
            </header>
            {isSearch.region === 'actives' && <Region data={demmy} />}
            {isSearch.dayAndTime === 'actives' && (
                <HeaderLocalAndTitle
                    dayTitle={dayTitle}
                    setDayTitle={setDayTitle}
                />
            )}
        </>
    );
};
