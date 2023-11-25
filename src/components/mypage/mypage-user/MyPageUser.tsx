import MyPageList from '../mypage-list/MyPageList';
import MyPageUserButton from './MyPageUserButton';
import MyPageUserFilter from './MyPageUserFilter';

export default function MyPageUser() {
    const listConfig = [
        {
            thumbnail: '/images/thumbnail/soccer.png',
            category: '축구',
            title: '조기 축구 모집합니다~',
            location: '온천천시민공원',
            isFavorited: false,
        },
        {
            thumbnail: '/images/thumbnail/basketball.png',
            category: '농구',
            title: '조기 농구 모집합니다~',
            location: '안양천시민공원',
            isFavorited: false,
        },
    ];
    return (
        <div className="mypage-user">
            <h2 className="mypage-title">내 모임</h2>
            <MyPageUserFilter />
            <MyPageList
                list={listConfig}
                buttonChilderen={<MyPageUserButton />}
            />
        </div>
    );
}
