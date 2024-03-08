import { useParams } from 'react-router-dom';
import Wrapper from '../components/@common/wrapper/Wrapper';
import DetailBody from '../components/detail/DetailBody';

export default function Detail() {
    const { id }: any = useParams();

    return (
        <Wrapper>
            <div className="detail-wrapper">
                <DetailBody id={id} />
            </div>
        </Wrapper>
    );
}
