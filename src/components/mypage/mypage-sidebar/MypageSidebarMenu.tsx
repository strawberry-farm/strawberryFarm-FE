import MypageSidebarItem from './MypageSidebarMenuItem';

export default function MypageSidebarMenu() {
    const menuList = [
        { title: '내 모임', path: '/mypage/user' },
        { title: '내 채팅방', path: '/chatroom' },
        { title: '위시리스트', path: '/mypage/wishlist' },
        {
            title: '운영 중인 모임',
            path: '/mypage/host',
            className: 'mypage-sidebar-menu-item-divider',
        },
        {
            title: '관심 지역 설정',
            path: '/mypage/like-location',
            className: 'mypage-sidebar-menu-item-divider',
        },
        { title: '관심 키워드 설정', path: '/mypage/like-keyword' },
        {
            title: '회원정보 수정',
            path: '/mypage/info',
            className: 'mypage-sidebar-menu-item-divider',
        },
        {
            title: '회원탈퇴',
            path: '/mypage/withdraw',
            className: 'color-gray-600',
        },
    ];
    return (
        <ul className="mypage-sidebar-menu">
            {menuList.map((menu, index) => (
                <MypageSidebarItem
                    key={`mypage-sidebar-menu-item-${index}`}
                    {...menu}
                />
            ))}
        </ul>
    );
}
