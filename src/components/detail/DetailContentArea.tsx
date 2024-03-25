import { customImage } from '../../hooks/utils';
import { DetailProps } from './Detail.interface';

export default function DetailContentArea({ data }: DetailProps) {
    const editIcon = '/images/icons/edit-line.png';
    const deleteIcon = '/images/icons/delete-line.png';
    const peopleIcon = '/images/icons/people-solid.png';
    const dayIcon = '/images/icons/schedule-solid.png';
    const timeIcon = '/images/icons/time-solid.png';

    return (
        <div className="detail-content-area">
            <div className="detail-content-image-group">
                <img
                    className="detail-content-image"
                    src={customImage('')}
                    alt="detail-image"
                ></img>
                <span className="detail-content-category">
                    {data.fieldName || '필드'}
                </span>
            </div>
            <div className="detail-content-title-group">
                <p className="detail-content-title">{data.title || '제목'}</p>
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
            <p className="detail-content-desc">{data.contents}</p>
            <div className="detail-content-tag-group">
                <div className="detail-content-tag">#조기축구</div>
                <div className="detail-content-tag">#동호회</div>
            </div>
            <div className="detail-content-hits">조회수 12</div>
        </div>
    );
}
