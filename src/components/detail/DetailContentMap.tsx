import { useEffect } from 'react';
import { DetailContentMapProps } from './Detail.interface';

export default function DetailContentMap({
    latitude,
    longitude,
}: DetailContentMapProps) {
    const { kakao } = window;

    useEffect(() => {
        const container = document.getElementById('customMap');
        const options = {
            center: new kakao.maps.LatLng(
                (latitude = 33.43213),
                (longitude = 126.41222),
            ),
            level: 3,
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const map = new kakao.maps.Map(container, options);
        const marker = new kakao.maps.Marker({
            map: map,
            position: options.center,
        });
    }, [latitude, longitude]);

    return (
        <div className="detail-content-map-group">
            <div id="customMap" className="detail-content-map" />
        </div>
    );
}
