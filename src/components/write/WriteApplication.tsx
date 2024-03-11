import React from 'react';
import { useRecoilState } from 'recoil';
import { writeState } from '../../atom/writeState';
import useInput from '../../hooks/useInput';
// import axios from '../../Lib/Axios/index';
// import { modalState } from '../../atom/modalState';
// import { useMutation } from '@tanstack/react-query';
const WriteApplication = (props: {
    setView: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const applicationValue = useInput('');
    const IntroductionValue = useInput('');
    const proficiencyValue = useInput('');
    const freeTalk = useInput('');
    // const [modal, setModal] = useRecoilState(modalState);
    const [write, setWtite] = useRecoilState(writeState);
    const onApi = () => {
        setWtite({
            ...write,
            application: {
                applicationText: applicationValue.value,
                introductionValue: IntroductionValue.value,
                proficiencyValue: proficiencyValue.value,
                freeTalk: freeTalk.value,
            },
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const onWrite = useMutation(() =>
    //     axios
    //         .post(
    //             '/boards',
    //             {
    //                 title: write.title,
    //                 fieldId: write.field,
    //                 contents: write.detail,
    //                 headcount: write.person,
    //                 city: write,
    //                 district: write,
    //                 b_code: write.local?.bcode,
    //                 location: write.local?.addr,
    //                 latitude: write.local!.x,
    //                 longitude: write.local!.y,
    //                 question: write,
    //                 days: write.date!.day,
    //                 times: write.date!.time ?? '',
    //                 tags: write.tag,
    //             },
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Access-Control-Allow-Origin': '*',
    //                     'Access-Control-Allow-Credentials': 'true',
    //                 },
    //             },
    //         )
    //         .then(() => {
    //             setModal({
    //                 ...modal,
    //                 content: '등록 완료되었습니다.',
    //                 confirm: '확인',
    //                 modalOpen: true,
    //                 url: '',
    //             });
    //         }),
    // );
    // console.log(write, 'write');

    return (
        <div className="writeTitleLayout">
            <div className="title">
                신청 질문 작성 <span className="subTitle">(필수)</span>
            </div>
            <div className="titleBox">
                <div className="AppSubTitle">
                    모임에 참여하고 싶은 신청자에게 건넬 질문을 작성해 주세요.
                </div>
                <div className="ApplicationInpBox">
                    <img
                        src={'/images/icons/question-fill-icon.png'}
                        alt={'?'}
                    />
                    <input
                        type="text"
                        placeholder="안녕하세요 자기소개 부탁드려요."
                        disabled={false}
                        {...applicationValue}
                    />
                </div>
                <div className="ApplicationInpBox">
                    <img
                        src={'/images/icons/question-fill-icon.png'}
                        alt={'?'}
                    />
                    <input
                        type="text"
                        placeholder="우리 모임에서 하게 될 운동의 숙련도가 궁금해요."
                        disabled={false}
                        {...IntroductionValue}
                    />
                </div>
                <div className="ApplicationInpBox">
                    <img
                        src={'/images/icons/question-fill-icon.png'}
                        alt={'?'}
                    />
                    <input
                        type="text"
                        placeholder="하고 싶은 말을 자유롭게 적어주세요!."
                        disabled={false}
                        {...proficiencyValue}
                    />
                </div>
                <div className="ApplicationInpBox">
                    <img
                        src={'/images/icons/question-fill-icon.png'}
                        alt={'?'}
                    />
                    <input
                        type="text"
                        placeholder="직접 입력."
                        disabled={false}
                        {...freeTalk}
                    />
                </div>
            </div>
            <div className="btnLayout">
                <div
                    className="prevBtn"
                    onClick={() => props.setView((prev) => prev - 1)}
                >
                    이전
                </div>
                <div className="nextBtn" onClick={onApi}>
                    등록
                </div>
            </div>
        </div>
    );
};

export default WriteApplication;
