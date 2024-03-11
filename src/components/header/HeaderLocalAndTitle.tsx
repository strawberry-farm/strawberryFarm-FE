import React, { useCallback } from 'react';
import { LocalTimeProps } from './Header.interface';
import { useRecoilState } from 'recoil';
import { dropDayAndTimeState } from '../../atom/dropStare';

export const HeaderLocalAndTitle = (props: {
    dayTitle: LocalTimeProps;
    setDayTitle: React.Dispatch<React.SetStateAction<LocalTimeProps>>;
}) => {
    const dayTitle = props.dayTitle;
    const [dayAndTime, setDayAndTime] = useRecoilState(dropDayAndTimeState);

    const dayOnClickHandler = useCallback(
        (e: React.MouseEvent) => {
            const target = e.target as HTMLDivElement;
            props.setDayTitle({ ...dayTitle, day: target.innerText });
            setDayAndTime({ ...dayAndTime, day: target.innerText });
        },
        [dayAndTime, dayTitle, props, setDayAndTime],
    );

    const dateOnClickHander = useCallback(
        (e: React.MouseEvent) => {
            const target = e.target as HTMLDivElement;
            if (target.innerText.includes('시간대 선택')) return;
            props.setDayTitle({ ...dayTitle, time: target.innerText });
            setDayAndTime({ ...dayAndTime, time: target.innerText });
        },
        [dayAndTime, dayTitle, props, setDayAndTime],
    );

    return (
        <div className="localTitleLayout">
            <div className="titleName">요일 선택</div>
            <div className="dayLayout" onClick={dayOnClickHandler}>
                <div
                    className={dayTitle.day.includes('평일') ? 'onDay' : 'day'}
                >
                    평일
                </div>
                <div
                    className={dayTitle.day.includes('주말') ? 'onDay' : 'day'}
                >
                    주말
                </div>
                <div
                    className={
                        dayTitle.day.includes('상관없음') ? 'onDay' : 'day'
                    }
                >
                    상관없음
                </div>
            </div>
            <div onClick={dateOnClickHander}>
                <div className="titleName">시간대 선택</div>
                <div className="dayLayout">
                    <div
                        className={
                            dayTitle.time.includes('새벽') ? 'onDay' : 'day'
                        }
                    >
                        새벽
                    </div>
                    <div
                        className={
                            dayTitle.time.includes('아침') ? 'onDay' : 'day'
                        }
                    >
                        아침
                    </div>
                    <div
                        className={
                            dayTitle.time.includes('오후') ? 'onDay' : 'day'
                        }
                    >
                        오후
                    </div>
                </div>
                <div className="dayLayout">
                    <div
                        className={
                            dayTitle.time.includes('저녁') ? 'onDay' : 'day'
                        }
                    >
                        저녁
                    </div>
                    <div
                        className={
                            dayTitle.time.includes('늦은밤') ? 'onDay' : 'day'
                        }
                    >
                        늦은밤
                    </div>
                    <div
                        className={
                            dayTitle.time.includes('상관없음') ? 'onDay' : 'day'
                        }
                    >
                        상관없음
                    </div>
                </div>
            </div>
        </div>
    );
};
