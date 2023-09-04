import DetailLeftSide from './DetailLeftSide';
import DetailRightSide from './DetailRightSide';
import { useState } from 'react';

export default function DetailBody() {
    const [height, setHeight] = useState<string>('100vh');

    return (
        <>
            <DetailLeftSide setHeight={setHeight} />
            <DetailRightSide height={height} />
        </>
    );
}
