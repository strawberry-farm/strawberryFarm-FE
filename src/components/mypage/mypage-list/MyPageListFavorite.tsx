import { useEffect, useState } from 'react';

export default function MyPageListFavorite({
    isFavorited,
}: {
    isFavorited: boolean;
}) {
    const [isFavorite, setIsFavorite] = useState(isFavorited);

    const iconSrc = `/icons/${
        isFavorite ? 'like-fill-icon' : 'like-not-fill-icon'
    }.png`;

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);
    };

    useEffect(() => {
        setIsFavorite(isFavorited);
    }, [isFavorited]);

    return (
        <button
            type="button"
            className="mypage-list-item-favorite"
            onClick={handleFavoriteToggle}
        >
            <img src={iconSrc} alt="" />
        </button>
    );
}
