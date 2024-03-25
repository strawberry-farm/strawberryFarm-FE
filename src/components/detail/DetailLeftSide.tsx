import { DetailLeftSideProps } from './Detail.interface';
import DetailContentArea from './DetailContentArea';
import DetailQuestionArea from './DetailQuestionArea';
import { useRef, useEffect } from 'react';

export default function DetailLeftSide({
    setHeight,
    data,
}: DetailLeftSideProps) {
    const leftSideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        leftSideRef.current?.scrollHeight &&
            setHeight(`${leftSideRef.current?.scrollHeight}px`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [leftSideRef.current?.scrollHeight]);

    return (
        <div className="detail-left-side" ref={leftSideRef}>
            {data && (
                <>
                    <DetailContentArea data={data} />
                    <DetailQuestionArea data={data} />
                </>
            )}
        </div>
    );
}
