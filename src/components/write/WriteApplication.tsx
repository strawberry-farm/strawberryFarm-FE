import React from 'react';
import useInput from '../../hooks/useInput';
import { useRecoilState } from 'recoil';
import { writeState } from '../../atom/writeState';
const WriteApplication = (props: {
    setView: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const applicationValue = useInput('');
    const IntroductionValue = useInput('');
    const proficiencyValue = useInput('');
    const freeTalk = useInput('');

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
    console.log(write);

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
                    <img src={'./icons/blueQuestion.webp'} alt={'?'} />
                    <input
                        type="text"
                        placeholder="안녕하세요 자기소개 부탁드려요."
                        disabled={false}
                        {...applicationValue}
                    />
                </div>
                <div className="ApplicationInpBox">
                    <img src={'./icons/blueQuestion.webp'} alt={'?'} />
                    <input
                        type="text"
                        placeholder="우리 모임에서 하게 될 운동의 숙련도가 궁금해요."
                        disabled={false}
                        {...IntroductionValue}
                    />
                </div>
                <div className="ApplicationInpBox">
                    <img src={'./icons/blueQuestion.webp'} alt={'?'} />
                    <input
                        type="text"
                        placeholder="하고 싶은 말을 자유롭게 적어주세요!."
                        disabled={false}
                        {...proficiencyValue}
                    />
                </div>
                <div className="ApplicationInpBox">
                    <img src={'./icons/blueQuestion.webp'} alt={'?'} />
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
