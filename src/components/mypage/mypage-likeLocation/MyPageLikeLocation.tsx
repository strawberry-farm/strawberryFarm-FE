import { demmy } from '../../../constant/region';
import { Region } from '../../header/HeaderRegion';

export default function MyPageLikeLocation() {
    return (
        <div className="mypage-likeLocation">
            <h2 className="mypage-title">관심 지역 설정</h2>
            <div className="mypage-body">
                <div className="mypage-likeLocation-region">
                    <Region data={demmy} />
                </div>
                <button type="button" className='mypage-submit-button button-blue'>등록</button>
            </div>
        </div>

    );
}
