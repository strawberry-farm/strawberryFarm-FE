import React, { useState } from 'react';
import '../../../styles/layout/region/_region.scss';
import { RegionProps } from './region.interface';
const Region = (props: { data: RegionProps[] }) => {
    const data = props.data;
    console.log(data);
    // const [defaultData, setDefaultData] = useState('서울');
    const [local, setLocal] = useState(data[0].sigungu);
    const OnclickHandler = (e: React.MouseEvent) => {
        const title = e.target as HTMLDivElement;

        const fliter = data.filter(
            (item: { sidoName: string }) => item.sidoName === title.innerText,
        );
        console.log(fliter[0].sigungu, '핗터');
        setLocal(fliter[0].sigungu);
    };
    console.log(local);

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
                                    {item.sigunguName}
                                </div>
                            );
                        },
                    )}
            </div>
        </div>
    );
};

export default Region;
