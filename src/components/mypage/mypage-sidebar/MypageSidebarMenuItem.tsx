import { Link } from 'react-router-dom';
import { MypageSidebarItemProps } from './MypageSidebar.interface';

export default function MypageSidebarItem(menu: MypageSidebarItemProps) {
    const { title, path, className } = menu;

    return (
        <li className={`mypage-sidebar-menu-item ${className || ''}`}>
            <Link to={path} className="mypage-sidebar-menu-link">
                {title}
            </Link>
        </li>
    );
}
