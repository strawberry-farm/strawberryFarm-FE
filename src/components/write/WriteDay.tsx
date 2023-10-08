import React, { useState } from 'react';
import { DayTag } from './writeCommon/DayTag';
import { useRecoilState } from 'recoil';
import { writeState } from '../../atom/writeState';

export const WriteDay = (props: {
    setView: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const [dayData, setDayData] = useState('');
    const [timeData, setTimeData] = useState('');
    const [write, setWtite] = useRecoilState(writeState);
    const onNextOnclick = () => {
        setWtite({
            ...write,
            date: {
                day: dayData,
                time: timeData,
            },
        });
        props.setView((prev) => prev + 1);
    };
    return (
        <div className="writeTitleLayout">
            <div className="title">
                요일 및 시간대 <span className="subTitle">(필수)</span>
            </div>
            <div className="titleBox">
                <div className="inputTitle">요일</div>
                <DayTag
                    tag={['평일', '주말', '상관없음']}
                    type={'day'}
                    tagData={setDayData}
                />
            </div>
            <div className="titleBox">
                <div className="inputTitle">시간대</div>
                <DayTag
                    tag={['새벽', '아침', '오후', '저녁', '늦은밤', '상관없음']}
                    type={'time'}
                    tagData={setTimeData}
                />
            </div>
            <div className="btnLayout">
                <div
                    className="prevBtn"
                    onClick={() => props.setView((prev) => prev - 1)}
                >
                    이전
                </div>
                <div className="nextBtn" onClick={onNextOnclick}>
                    다음
                </div>
            </div>
        </div>
    );
};
