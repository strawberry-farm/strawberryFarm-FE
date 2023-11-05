import MypageSidebarItem from './MypageSidebarMenuItem';

export default function MypageSidebarMenu() {
    const menuList = [
        { title: '내 모임', path: '/mypage/user' },
        { title: '내 채팅방', path: '/mypage/chatroom' },
        { title: '위시리스트', path: '/mypage/wishlist' },
        { title: '운영 중인 모임', path: '/mypage/host', divider: true },
        {
            title: '관심 지역 설정',
            path: '/mypage/like-location',
            divider: true,
        },
        { title: '관심 키워드 설정', path: '/mypage/like-keyword' },
        { title: '회원정보 수정', path: '/mypage/info', divider: true },
        { title: '회원탈퇴', path: '/mypage/withdraw' },
    ];
    return (
        <ul className="mypage-sidebar-menu">
            {menuList.map((menu, index) => (
                <MypageSidebarItem
                    key={`mypage-sidebar-item-${index}`}
                    {...menu}
                />
            ))}
        </ul>
    );
}
