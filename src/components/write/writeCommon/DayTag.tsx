import React, { useCallback, useState } from 'react';
import { LocalTimeProps } from './WriteCommon.interface';

export const DayTag = (props: {
    tag: string[];
    type: string;
    tagData: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const [dayTitle, setDayTitle] = useState<LocalTimeProps>({
        day: '',
        time: '',
    });

    const dayOnClickHandler = useCallback(
        (e: React.MouseEvent) => {
            const target = e.target as HTMLDivElement;
            if (props.type === 'day') {
                setDayTitle({ ...dayTitle, day: target.innerText });
            } else {
                setDayTitle({ ...dayTitle, time: target.innerText });
            }
            props.tagData(target.innerText);
        },
        [dayTitle, props],
    );

    return (
        <div
            className={
                props.type === 'day' ? 'writeDayLayout' : 'writeTimeLayout'
            }
        >
            <div className="dayLayout">
                {props.tag.map((item: string, idx: number) => {
                    return (
                        <div
                            onClick={dayOnClickHandler}
                            key={idx}
                            className={
                                props.type === 'day'
                                    ? dayTitle.day.includes(item)
                                        ? 'onDay'
                                        : 'day'
                                    : dayTitle.time.includes(item)
                                    ? 'onDay'
                                    : 'day'
                            }
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
