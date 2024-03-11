import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dropDayAndTimeState, dropRogionState } from '../../atom/dropStare';

import { useFocus } from '../../hooks/useFocus';
import {
    LocalTimeProps,
    RegionProps,
    SearchIsProps,
    Situation,
} from './Header.interface';
import { UserDropDown } from './HeaderDropdown';
import { HeaderLocalAndTitle } from './HeaderLocalAndTitle';
import { Region } from './HeaderRegion';
import { SearchTag } from './HeaderSearchTag';
import { queryKey } from '../../queries/query-key';
import { useQuery } from '@tanstack/react-query';
import axios from '../../Lib/Axios';
import useInput from '../../hooks/useInput';
import {
    mainState,
    pageNumberState,
    totalPageState,
} from '../../atom/mainState';

// const demmy: RegionProps[] = [
//     {
//         sidoName: '서울',
//         sigungu: [
//             {
//                 sigunguName: '서울 전체',
//                 bCode: 11000,
//             },
//             {
//                 sigunguName: '종로구',
//                 bCode: 11110,
//             },
//         ],
//     },
//     {
//         sidoName: '경기',
//         sigungu: [
//             {
//                 sigunguName: '경기 전체',
//                 bCode: 4100000000,
//             },
//             {
//                 sigunguName: '성남시',
//                 bCode: 4130000000,
//             },
//         ],
//     },
//     {
//         sidoName: '인천',
//         sigungu: [
//             {
//                 sigunguName: '경기 전체',
//                 bCode: 4100000000,
//             },
//             {
//                 sigunguName: '성남시',
//                 bCode: 4130000000,
//             },
//         ],
//     },
//     {
//         sidoName: '대전',
//         sigungu: [
//             {
//                 sigunguName: '경기 전체',
//                 bCode: 4100000000,
//             },
//             {
//                 sigunguName: '성남시',
//                 bCode: 4130000000,
//             },
//         ],
//     },
//     {
//         sidoName: '충남',
//         sigungu: [
//             {
//                 sigunguName: '경기 전체',
//                 bCode: 4100000000,
//             },
//             {
//                 sigunguName: '성남시',
//                 bCode: 4130000000,
//             },
//         ],
//     },
//     {
//         sidoName: '세종',
//         sigungu: [
//             {
//                 sigunguName: '경기 전체',
//                 bCode: 4100000000,
//             },
//             {
//                 sigunguName: '성남시',
//                 bCode: 4130000000,
//             },
//         ],
//     },
// ];

export const Header = () => {
    const searchRef = useRef<HTMLDivElement>(null);
    const navigator = useNavigate();
    const regionValue = useRecoilValue(dropRogionState);
    const dayAndTime = useRecoilValue(dropDayAndTimeState);
    const mainData = useSetRecoilState(mainState);
    const totalPage = useSetRecoilState(totalPageState);
    const title = useInput('');
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
    const page = useRecoilValue(pageNumberState);
    // const [isRegion, setIsRegion] = useState(false);
    const [isSearch, setIsSearch] = useState<SearchIsProps>({
        region: 'basic',
        dayAndTime: 'basic',
        localAndTitle: 'basic',
    });
    const { data } = useQuery({
        queryKey: queryKey.contents.search,
        queryFn: async () =>
            axios.get('/contents/adminArea').then((res) => res.data),
    });

    const { data: searchData, refetch } = useQuery({
        queryKey: queryKey.contents.data,
        queryFn: async () =>
            axios
                .get(
                    `/boards/search/non-user?keyword=${title.value}&page=${page}&size=8`,
                )
                .then((res) => {
                    totalPage(res.data.totalCount);
                    return res.data.boards;
                }),
    });
    console.log(searchData);

    useEffect(() => {
        refetch();
        mainData(searchData);
    }, [mainData, refetch, searchData, title]);
    // /boards/search?keyword=제목&page=5&size=15
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
    const jwt = localStorage.getItem('jwt')
        ? localStorage.getItem('jwt')
        : null;

    return (
        <>
            <header className="headers">
                <div className="headLayout">
                    <div className="headersLogo" onClick={() => navigator('/')}>
                        <img src="/images/icons/running-solid.png" alt="logo" />
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
                                {regionValue === '' ? '지역' : regionValue}
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
                                {dayAndTime.day === '' && dayAndTime.time === ''
                                    ? '요일·시간대'
                                    : dayAndTime.day + '·' + dayAndTime.time}
                            </SearchTag>
                            {isSearch.dayAndTime.includes('basic') && (
                                <span className="stick">|</span>
                            )}
                            <input
                                className="searchInp"
                                placeholder="모임을 검색해 보세요!"
                                ref={ref}
                                {...title}
                            />
                            <div
                                className="searchIconBtn"
                                // onClick={() => refetch()}
                            >
                                <img
                                    src="/images/icons/search-solid.png"
                                    alt="검색버튼"
                                />
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
                                src="/images/icons/memu-solid.png"
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
                                    src="/images/icons/alarm-solid.png"
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
                                    src="/images/icons/user-line.png"
                                    alt="유저메뉴"
                                />
                            </>
                        )}
                        {isMemu && (
                            <UserDropDown
                                jwt={jwt}
                                situation={isMemu}
                                setSituation={setIsMemu}
                            />
                        )}
                    </div>
                </div>
            </header>
            {data && isSearch.region === 'actives' && <Region data={data} />}
            {isSearch.dayAndTime === 'actives' && (
                <HeaderLocalAndTitle
                    dayTitle={dayTitle}
                    setDayTitle={setDayTitle}
                />
            )}
        </>
    );
};
