import { Link } from 'react-router-dom';
import { MypageSidebarItemProps } from './MypageSidebar.interface';

export default function MypageSidebarItem(menu: MypageSidebarItemProps) {
    const { title, path, divider } = menu;

    const dividerClassName = divider ? 'mypage-Sidebar-item-divider' : '';

    return (
        <li className={`mypage-Sidebar-item ${dividerClassName}`}>
            <Link to={path}>{title}</Link>
        </li>
    );
}
