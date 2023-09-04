import { customImage } from '../../hooks/utils';
import { useState } from 'react';

export default function DetailContentArea() {
    const editIcon = '/icons/edit-icon.png';
    const deleteIcon = '/icons/delete-icon.png';
    const peopleIcon = '/icons/people-icon.png';
    const dayIcon = '/icons/day-icon.png';
    const timeIcon = '/icons/time-icon.png';

    const [desc, setDesc] = useState<string>(
        '안녕하세요 이번 축구 모임을 모집하게 된 조솔하 입니다.\n\n매주 일요일마다 아침 6:00 우장산에서 축구를 진행하려 합니다.\n참가비 만원있습니다.\n\n저희는 20-40대까지 다양한 연령대로 이루어져 있으며 모두 축구 좋아하는 착한사람들 입니다.\n\n이 후 모집완료 되면 따로 다시 공지 드리겠습니다',
    );

    return (
        <div className="detail-content-area">
            <div className="detail-content-image-group">
                <img
                    className="detail-content-image"
                    src={customImage('')}
                    alt="detail-image"
                ></img>
                <span className="detail-content-category">축구</span>
            </div>
            <div className="detail-content-title-group">
                <p className="detail-content-title">조기 축구 모집합니다</p>
                <div className="detail-content-button-group">
                    <div className="button">
                        <img className="icon" src={editIcon}></img>
                        <span className="text">수정</span>
                    </div>
                    <div className="button">
                        <img className="icon" src={deleteIcon}></img>
                        <span className="text">삭제</span>
                    </div>
                </div>
            </div>
            <div className="detail-content-info-group">
                <div className="detail-content-info">
                    <img className="icon" src={peopleIcon}></img>
                    <span className="text">1/6명</span>
                </div>
                <div className="detail-content-info">
                    <img className="icon" src={dayIcon}></img>
                    <span className="text">평일</span>
                </div>
                <div className="detail-content-info">
                    <img className="icon" src={timeIcon}></img>
                    <span className="text">늦은 밤</span>
                </div>
            </div>
            <p className="detail-content-desc">{desc}</p>
            <div className="detail-content-tag-group">
                <div className="detail-content-tag">#조기축구</div>
                <div className="detail-content-tag">#동호회</div>
            </div>
            <div className="detail-content-hits">조회수 12</div>
        </div>
    );
}
