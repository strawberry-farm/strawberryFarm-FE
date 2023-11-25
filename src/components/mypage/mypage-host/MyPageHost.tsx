import MyPageList from '../mypage-list/MyPageList';
import MyPageHostButton from './MyPageHostButton';

export default function MyPageHost() {
    const listConfig = [
        {
            thumbnail: '/images/thumbnail/soccer.png',
            category: '축구',
            title: '조기 축구 모집합니다~',
            location: '온천천시민공원',
            isFavorited: true,
        },
    ];
    return (
        <div className="mypage-user">
            <h2 className="mypage-title">운영 중인 모임</h2>
            <MyPageList
                list={listConfig}
                buttonChilderen={<MyPageHostButton />}
            />
        </div>
    );
}
