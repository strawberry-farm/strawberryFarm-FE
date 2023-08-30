import React, { useState } from 'react';
import { RegionProps } from './Header.interface';
export const Region = (props: { data: RegionProps[] }) => {
    const data = props.data;
    // const [defaultData, setDefaultData] = useState('서울');
    const [local, setLocal] = useState(data[0].sigungu);
    const OnclickHandler = (e: React.MouseEvent) => {
        const title = e.target as HTMLDivElement;

        const fliter = data.filter(
            (item: { sidoName: string }) => item.sidoName === title.innerText,
        );
        setLocal(fliter[0].sigungu);
    };

    return (
        <div className="layout">
            <div className="city" onClick={OnclickHandler}>
                {data.map((item: { sidoName: string }, idx) => (
                    <div className="cityLow" key={idx}>
                        {item.sidoName}
                    </div>
                ))}
            </div>
            <div className="local">
                {local &&
                    local.map(
                        (item: {
                            sigunguName: string;
                            bCode: number | string;
                        }) => {
                            return (
                                <div key={item.bCode} className="localLayout">
                                    <span> {item.sigunguName}</span>
                                </div>
                            );
                        },
                    )}
            </div>
        </div>
    );
};
