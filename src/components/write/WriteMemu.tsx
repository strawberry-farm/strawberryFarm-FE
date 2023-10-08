import React, { useCallback, useEffect, useRef } from 'react';
const memuMap = [
    {
        id: 0,
        title: '1.제목 및 분야',
    },
    {
        id: 1,
        title: '2.인원 및 장소',
    },
    {
        id: 2,
        title: '3.요일 및 시간대',
    },
    {
        id: 3,
        title: '4.상세 내용',
    },
    {
        id: 4,
        title: '5.사진 및 태그',
    },
    {
        id: 5,
        title: '6.신청 질문 작성',
    },
];

export const WriteMemu = (props: {
    view: number;
    setView: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const memuRef = useRef<HTMLDivElement>(null);

    const memuClick = useCallback(
        (e: React.MouseEvent) => {
            const target = e.target as HTMLDivElement;
            props.setView(Number(target.id));
        },
        [props],
    );
    useEffect(() => {
        if (memuRef.current !== null) {
            const style = memuRef.current.querySelectorAll('.memuTitle') as any;
            for (let i = 0; i < style.length; i++) {
                if (i !== props.view) {
                    style[i].classList.remove('active');
                } else {
                    style[i].classList.add('active');
                }
            }
        }
    }, [props.view, memuClick]);
    return (
        <div className="memuLayout">
            <div className="memu" ref={memuRef}>
                {memuMap.map((item, idx) => {
                    return (
                        <div
                            onClick={memuClick}
                            className={'memuTitle'}
                            key={item.id}
                            id={`${item.id}`}
                        >
                            {item.title}
                            {idx === props.view ? (
                                <img src={'/icons/checkboxFull.png'} />
                            ) : (
                                <img src={'/icons/checkboxBin.png'} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
