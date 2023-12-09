import { useState } from 'react';
import { WriteTitle } from '../components/write/WriteTitle';
import { WriteMemu } from '../components/write/WriteMemu';
import { WritePerson } from '../components/write/WritePerson';
import { WriteDay } from '../components/write/WriteDay';
import { WriteDetail } from '../components/write/WriteDetail';
import WritePicture from '../components/write/WritePicture';
import WriteApplication from '../components/write/WriteApplication';

export const Write = () => {
    const [writeView, setWriteView] = useState<number>(0);
    return (
        <div className="write">
            <WriteMemu view={writeView} setView={setWriteView} />
            {/* 제목및 분야 */}
            {writeView === 0 && <WriteTitle setView={setWriteView} />}
            {/* 인원 및 장소 */}
            {writeView === 1 && <WritePerson setView={setWriteView} />}
            {/* 요일 및 시간대 */}
            {writeView === 2 && <WriteDay setView={setWriteView} />}
            {/* 상세내용 */}
            {writeView === 3 && <WriteDetail setView={setWriteView} />}
            {/* 사진 및 태그 */}
            {writeView === 4 && <WritePicture setView={setWriteView} />}
            {/* 신청 질문 작성 */}
            {writeView === 5 && <WriteApplication setView={setWriteView} />}
        </div>
    );
};
