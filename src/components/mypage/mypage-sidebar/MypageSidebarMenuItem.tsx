import { Link, useLocation } from 'react-router-dom';
import { MypageSidebarItemProps } from './MypageSidebar.interface';

export default function MypageSidebarItem({
    title,
    path,
    className,
}: MypageSidebarItemProps) {
    const location = useLocation();
    const activeClass = location.pathname === path ? 'active' : '';

    return (
        <li className={`mypage-sidebar-menu-item ${className || ''}`}>
            <Link
                to={path}
                className={`mypage-sidebar-menu-link ${activeClass}`}
            >
                {title}
            </Link>
        </li>
    );
}
