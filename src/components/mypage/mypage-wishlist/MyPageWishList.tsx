import MyPageList from '../mypage-list/MyPageList';
import MyPageWishListButton from './MyPageWishListButton';

export default function MyPageWishList() {
    const listConfig = [
        {
            thumbnail: '/icons/soccer.png',
            category: '축구',
            title: '조기 축구 모집합니다~',
            location: '온천천시민공원',
            isFavorited: true,
        },
    ];
    return (
        <div className="mypage-user">
            <h2 className="mypage-title">위시리스트</h2>
            <MyPageList
                list={listConfig}
                buttonChilderen={<MyPageWishListButton />}
            />
        </div>
    );
}
