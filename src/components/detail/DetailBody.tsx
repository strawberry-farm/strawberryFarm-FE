import { useQuery } from '@tanstack/react-query';
import DetailLeftSide from './DetailLeftSide';
import DetailRightSide from './DetailRightSide';
import { useState } from 'react';
import { queryKey } from '../../queries/query-key';
import axios from '../../Lib/Axios/index';

export default function DetailBody(props: { id: number }) {
    const [height, setHeight] = useState<string>('100vh');
    const { data } = useQuery({
        queryKey: queryKey.contents.postId(props.id),
        queryFn: async () =>
            axios.get(`/boards/${props.id}`).then((res) => res.data),
    });
    console.log(data, '1123');

    return (
        <>
            {data && <DetailLeftSide setHeight={setHeight} data={data} />}

            <DetailRightSide height={height} />
        </>
    );
}
