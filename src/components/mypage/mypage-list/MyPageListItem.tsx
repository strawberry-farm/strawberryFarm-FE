import { MypageItemProps } from './MyPageList.interface';
import MyPageListFavorite from './MyPageListFavorite';

export default function MyPageListItem<T>({
    thumbnail,
    category,
    title,
    location,
    isFavorited,
}: MypageItemProps) {
    return (
        <div className="mypage-list-item-box">
            <div
                className="mypage-list-item-thumbnail"
                style={{ backgroundImage: `url(${thumbnail})` }}
            ></div>
            <div className="mypage-list-item-contents">
                <div className="mypage-list-item-category">{category}</div>
                <div className="mypage-list-item-title">{title}</div>
                <div className="mypage-list-item-location">
                    <img src="/icons/location-gray-icon.png" alt="" />
                    {location}
                </div>
                <MyPageListFavorite isFavorited={isFavorited} />
            </div>
        </div>
    );
}
