import React, { useEffect, useRef, useState } from 'react';
import Input from '../@common/input/Input';
import { writeState } from '../../atom/writeState';
import { useRecoilState } from 'recoil';
const dummy = [
    { fieldId: 1, fieldName: '축구' },
    { fieldId: 2, fieldName: '자전거' },
    { fieldId: 3, fieldName: '필라테스' },
    { fieldId: 4, fieldName: '볼링' },
    { fieldId: 5, fieldName: '테니스' },
    { fieldId: 6, fieldName: '풋살' },
    { fieldId: 7, fieldName: '야구' },
    { fieldId: 8, fieldName: '농구' },
    { fieldId: 9, fieldName: '복싱' },
    { fieldId: 10, fieldName: '요가' },
    { fieldId: 11, fieldName: '헬스' },
    { fieldId: 12, fieldName: '탁구' },
    { fieldId: 13, fieldName: '클라이밍' },
    { fieldId: 14, fieldName: '산책' },
];

export const WriteTitle = (props: {
    setView: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const [titleInp, setTitle] = useState<string | undefined>('');
    const [writeData, setWriteData] = useState({
        title: '',
        field: {
            id: '',
            fieldName: '',
        },
    });
    const [write, setWtite] = useRecoilState(writeState);
    const tagRef = useRef<HTMLDivElement>(null);
    const fieldOnclick = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        setWriteData({
            ...writeData,
            field: { id: target.id.toString(), fieldName: target.innerText },
        });
    };

    useEffect(() => {
        if (tagRef.current !== null) {
            const style = tagRef.current.querySelectorAll('.field') as any;

            for (let i = 0; i < style.length; i++) {
                if (i + 1 !== Number(writeData.field.id)) {
                    style[i].classList.remove('fieldActive');
                } else {
                    style[i].classList.add('fieldActive');
                }
            }
        }
    }, [writeData.field.id]);
    const onNextOnclick = () => {
        setWtite({ ...write, title: titleInp, field: writeData.field });

        props.setView((prev) => prev + 1);
    };
    return (
        <div className="writeTitleLayout">
            <div className="title">
                제목 및 운동분야 <span className="subTitle">(필수)</span>
            </div>
            <div className="titleBox">
                <div className="inputTitle">제목</div>
                <Input
                    type="text"
                    placeholder="제목을 입력해주세요"
                    setValue={setTitle}
                    disabled={false}
                />
            </div>
            <div className="titleField">
                <div className="fieldTilte">운동분야</div>
                <div className="fieldLayout" ref={tagRef}>
                    {dummy &&
                        dummy.map((item) => {
                            return (
                                <div
                                    onClick={fieldOnclick}
                                    id={String(item.fieldId)}
                                    key={item.fieldId}
                                    className="field"
                                >
                                    {item.fieldName}
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="btnLayout">
                <div
                    className="prevBtn"
                    onClick={() => alert('뒤로 갈수없습니다')}
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
