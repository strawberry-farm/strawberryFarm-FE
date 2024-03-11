import { Pagination } from '../@common/pagination/Pagination';
import { ContentProps } from './Main.interface';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pageNumberState, totalPageState } from '../../atom/mainState';

const MainContents = (props: { data: ContentProps[] }) => {
    // 페이지별 담는 글 갯수
    const limit = 5;
    // const [page, setPage] = useState(1);
    const [page, setPage] = useRecoilState(pageNumberState);
    const navigator = useNavigate();
    const totalCount = useRecoilValue(totalPageState);
    // 총 몇개의 페이지가 필요한지 계산
    // const offset = (page - 1) * limit;
    return (
        <div className="mainContentsLayout">
            {props.data.map((item: ContentProps) => {
                return (
                    <div
                        className="mainContents"
                        key={item.boardId}
                        onClick={() => navigator(`/detail/${item.boardId}`)}
                    >
                        <img
                            src="https://file3.instiz.net/data/cached_img/upload/2018/05/20/2/081718869d129b71e660e1daded277ef.jpg"
                            alt="임시사진"
                        />
                        <div className="ContentsTextBox">
                            <div className="contentsDateBox">
                                <div className="contentsTagBox">
                                    <div className="contentsTag">
                                        {item.days}
                                    </div>
                                    <div className="contentsTag">
                                        {item.times}
                                    </div>
                                </div>
                                {/* <div className="contentsTag">{item.days}</div> */}
                                <div className="imgBox">
                                    <img
                                        src="/images/icons/like-solid.png"
                                        alt="즐겨찾기"
                                    />
                                </div>
                            </div>
                            <div className="contentsData">
                                <div className="dataTitle">{item.title}</div>
                                <div className="dataLocation">
                                    <img
                                        src="/images/icons/location-solid.png"
                                        alt="지역"
                                    />
                                    <span>{item.location}</span>
                                </div>
                                <div className="dataPeople">
                                    <img
                                        src="/images/icons/two-people-solid.png"
                                        alt="인원"
                                    />
                                    <span>
                                        {item.applyCount} / {item.headCount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Pagination
                total={totalCount}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </div>
    );
};

export default MainContents;
