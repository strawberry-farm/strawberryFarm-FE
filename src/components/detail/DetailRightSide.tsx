import { customUserImage } from '../../hooks/utils';
import { DetailRightSideProps } from './Detail.interface';
import DetailContentMap from './DetailContentMap';
import { useState } from 'react';

export default function DetailRightSide({ height }: DetailRightSideProps) {
    const locationIcon = '/icons/location-icon.png';
    const questionIcon = '/icons/question-icon.png';
    const likeNotFillIcon = '/icons/like-not-fill-icon.png';
    const likeFillIcon = '/icons/like-fill-icon.png';
    const [like, setLike] = useState<boolean>(false);

    const changeLikeState = () => {
        like === true ? setLike(false) : setLike(true);
    };

    return (
        <div className="detail-right-side" style={{ height: `${height}` }}>
            <div className="detail-sticky">
                <div className="detail-content-apply-group">
                    <DetailContentMap
                        latitude={35.191869}
                        longitude={129.095163}
                    />
                    <div className="detail-content-location-group">
                        <img className="location-icon" src={locationIcon}></img>
                        <span className="detail-content-location">
                            온천시민공원
                        </span>
                    </div>
                    <div className="detail-content-button-group">
                        <button className="button">
                            <p className="text">문의하기</p>
                            <img className="icon" src={questionIcon}></img>
                        </button>
                        <button className="button" onClick={changeLikeState}>
                            <p className="text">좋아요</p>
                            <img
                                className="icon"
                                src={
                                    like === true
                                        ? likeFillIcon
                                        : likeNotFillIcon
                                }
                            ></img>
                        </button>
                    </div>
                    <button className="apply-button">신청하기</button>
                </div>
                <div className="detail-content-user-group">
                    <div className="detail-content-user">
                        <img
                            className="user-image"
                            src={customUserImage('')}
                        ></img>
                        <p className="user-name">주니주니주니</p>
                    </div>
                    <p className="detail-content-user-info">
                        축구에 미친 사람입니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
