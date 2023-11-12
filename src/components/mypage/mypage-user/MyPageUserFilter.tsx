import { useState } from 'react';

export default function MyPageUserFilter() {
    const [isActive, setIsActive] = useState(false);

    const handleFilterCilck = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="mypage-user-filter">
            <button
                type="button"
                className="mypage-user-filter-button"
                onClick={handleFilterCilck}
            >
                참여중
            </button>
            <button
                type="button"
                className="mypage-user-filter-button"
                onClick={handleFilterCilck}
            >
                대기중
            </button>
        </div>
    );
}
