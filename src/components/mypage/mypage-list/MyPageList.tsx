import { ReactElement } from 'react';
import { MypageItemProps } from './MyPageList.interface';
import MyPageListItem from './MyPageListItem';

interface MyPageListProps {
    list: MypageItemProps[];
    buttonChilderen: ReactElement;
}

export default function MyPageList({ list, buttonChilderen }: MyPageListProps) {
    return (
        <ul className="mypage-list">
            {list.map((config, index) => (
                <li
                    key={`mypage-list-item-${index}`}
                    className="mypage-list-item"
                >
                    <div className="mypage-list-item-wrapper">
                        <MyPageListItem {...config}></MyPageListItem>
                        {buttonChilderen}
                    </div>
                </li>
            ))}
        </ul>
    );
}
