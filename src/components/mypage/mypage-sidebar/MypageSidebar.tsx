import MypageSidebarMenu from './MypageSidebarMenu';
import MypageSidebarProfile from './MypageSidebarProfile';

export default function MypageSidebar() {
    return (
        <div className="mypage-sidebar">
            <MypageSidebarProfile />
            <MypageSidebarMenu />
        </div>
    );
}
