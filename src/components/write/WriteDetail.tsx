import React from 'react';
import useInput from '../../hooks/useInput';
import { useRecoilState } from 'recoil';
import { writeState } from '../../atom/writeState';
export const WriteDetail = (props: {
    setView: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const detailValue = useInput('');
    const [write, setWtite] = useRecoilState(writeState);

    const onNextOnclick = () => {
        setWtite({
            ...write,
            detail: detailValue.value,
        });
        //
        props.setView((prev) => prev + 1);
    };
    return (
        <div className="writeTitleLayout">
            <div className="title">
                상세내용 <span className="subTitle">(필수)</span>
            </div>
            <div className="titleBox">
                <textarea className="InpTextarea" {...detailValue} />
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
