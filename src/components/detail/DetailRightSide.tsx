import { customUserImage } from '../../hooks/utils';
import { DetailRightSideProps } from './Detail.interface';
import DetailContentMap from './DetailContentMap';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '../../Lib/Axios//index';
import { useNavigate, useParams } from 'react-router-dom';
import { queryKey } from '../../queries/query-key';

export default function DetailRightSide({
    height,
    wish,
    wishId,
}: DetailRightSideProps) {
    const queryClient = useQueryClient();
    const locationIcon = '/images/icons/location-solid.png';
    const questionIcon = '/images/icons/question-line.png';
    const likeNotFillIcon = '/images/icons/like-line.png';
    const likeFillIcon = '/images/icons/like-solid.png';
    const { id } = useParams();
    const navigator = useNavigate();
    const changeLikeState = () => {
        !wish ? onWish.mutate() : delWish.mutate();
    };
    const onWish = useMutation(() =>
        axios
            .post(
                '/boards/wish',
                {
                    boardsId: Number(id),
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': 'true',
                    },
                },
            )
            .then(() => {
                const idString = Number(id);
                queryClient.invalidateQueries(
                    queryKey.contents.postId(idString),
                );
            })
            .catch(() => navigator('/signin')),
    );
    const delWish = useMutation(() =>
        axios
            .delete(`/boards/wish/${wishId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                },
            })
            .then(() => {
                const idString = Number(id);
                queryClient.invalidateQueries(
                    queryKey.contents.postId(idString),
                );
            }),
    );
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
                        <button className="buttonDetail">
                            <p className="textDetail">문의하기</p>
                            <img className="icon" src={questionIcon}></img>
                        </button>
                        <button
                            className="buttonDetail"
                            onClick={changeLikeState}
                        >
                            <p className="textDetail">좋아요</p>
                            <img
                                className="icon"
                                src={
                                    wish === true
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
