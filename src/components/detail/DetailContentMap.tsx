import { useEffect, useState } from 'react';
import { DetailContentMapProps } from './Detail.interface';

export default function DetailContentMap({
    latitude,
    longitude,
}: DetailContentMapProps) {
    const { kakao } = window;
    console.log(kakao, 'kakao');

    useEffect(() => {
        const container = document.getElementById('customMap');
        const options = {
            center: new kakao.maps.LatLng(
                (latitude = 39.4),
                (longitude = 39.4),
            ),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        const marker = new kakao.maps.Marker({
            map: map,
            position: options.center,
        });
    }, [latitude, longitude]);

    return (
        <div className="detail-content-map-group">
            <div id="customMap" className="detail-content-map"></div>
        </div>
    );
}
