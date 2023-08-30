import React from 'react';

export const HeaderLocalAndTitle = () => {
    return (
        <div className="localTitleLayout">
            <div className="titleName">요일 선택</div>
            <div className="dayLayout">
                <div className="day">평일</div>
                <div className="day">주말</div>
                <div className="day">상관없음</div>
            </div>
            <div className="titleName">시간대 선택</div>
            <div className="dayLayout">
                <div className="day">새벽</div>
                <div className="day">아침</div>
                <div className="day">오후</div>
            </div>
            <div className="dayLayout">
                <div className="day">저녁</div>
                <div className="day">늦은밤</div>
                <div className="day">상관없음</div>
            </div>
        </div>
    );
};
