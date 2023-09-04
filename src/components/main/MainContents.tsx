import { useState } from 'react';
import { ContentProps } from './Main.interface';
import { Pagination } from '../@common/pagination/Pagination';

const MainContents = (props: { data: ContentProps[] }) => {
    console.log(props.data);
    // 페이지별 담는 글 갯수
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    // 총 몇개의 페이지가 필요한지 계산
    const offset = (page - 1) * limit;
    return (
        <div className="mainContentsLayout">
            {props.data.map((item: ContentProps) => {
                return (
                    <div className="mainContents" key={item.postId}>
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
                                        src="/icons/heartSolid.png"
                                        alt="즐겨찾기"
                                    />
                                </div>
                            </div>
                            <div className="contentsData">
                                <div className="dataTitle">{item.title}</div>
                                <div className="dataLocation">
                                    <img
                                        src="/icons/locationIcon.png"
                                        alt="지역"
                                    />
                                    <span>{item.location}</span>
                                </div>
                                <div className="dataPeople">
                                    <img
                                        src="/icons/twoPeople.png"
                                        alt="인원"
                                    />
                                    <span>
                                        {item.headCountStatus} /{' '}
                                        {item.headCount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Pagination
                total={props.data.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </div>
    );
};

export default MainContents;