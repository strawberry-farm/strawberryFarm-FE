import React, { useState } from 'react';
import { RegionProps } from './Header.interface';
// import { useSetRecoilState } from 'recoil';
// import { dropRogionState } from '../../atom/dropStare';
export const Region = (props: { data: RegionProps; setLocation?: any }) => {
    const data = props.data.sido;

    // const [defaultData, setDefaultData] = useState('서울');
    const [local, setLocal] = useState(data[0].sigungu);
    // const setDropdown = useSetRecoilState(dropRogionState);

    const OnclickHandler = (e: React.MouseEvent) => {
        const title = e.target as HTMLDivElement;
        const fliter = data.filter(
            (item: { sidoName: string }) => item.sidoName === title.innerText,
        );
        setLocal(fliter[0].sigungu);
        console.log(fliter);
    };
    const OnClickChange = (e: React.MouseEvent) => {
        const title = e.target as HTMLDivElement;

        if (typeof props.setLocation !== 'undefined') {
            props.setLocation({
                sigunguName: title.innerText,
                bCode: e.currentTarget.id,
            });
        }
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
                            bcode: number | string;
                        }) => {
                            return (
                                <div
                                    key={item.bcode}
                                    className="localLayout"
                                    id={`${item.bcode}`}
                                    onClick={OnClickChange}
                                >
                                    <span> {item.sigunguName}</span>
                                </div>
                            );
                        },
                    )}
            </div>
        </div>
    );
};
