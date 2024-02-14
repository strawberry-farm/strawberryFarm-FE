import { Silde } from '../@common/slide/silde';
import { ContentProps } from './Main.interface';
import MainContents from './MainContents';
export const MainPage = () => {
    const data: ContentProps[] = [
        {
            postId: 1,
            title: '축구구합니다.',
            location: '공원',
            times: '늦은밤',
            days: '평일',
            headCount: 5,
            headCountStatus: 1,
            imgae: ['이미지URL1', '이미지URL2'],
            wishState: true,
        },
        {
            postId: 2,
            title: '농구 구합니다.',
            location: '공원',
            times: '늦은밤',
            days: '주말',
            headCount: 5,
            headCountStatus: 3,
            imgae: ['이미지URL1', '이미지URL2', '이미지URL3'],
            wishState: false,
        },
        {
            postId: 3,
            title: '농구 구합니다.',
            location: '공원',
            times: '늦은밤',
            days: '주말',
            headCount: 5,
            headCountStatus: 3,
            imgae: ['이미지URL1', '이미지URL2', '이미지URL3'],
            wishState: false,
        },
        {
            postId: 4,
            title: '농구 구합니다.',
            location: '공원',
            times: '늦은밤',
            days: '주말',
            headCount: 5,
            headCountStatus: 3,
            imgae: ['이미지URL1', '이미지URL2', '이미지URL3'],
            wishState: false,
        },
        {
            postId: 5,
            title: '농구 구합니다.',
            location: '공원',
            times: '늦은밤',
            days: '주말',
            headCount: 5,
            headCountStatus: 3,
            imgae: ['이미지URL1', '이미지URL2', '이미지URL3'],
            wishState: false,
        },
        {
            postId: 6,
            title: '농구 구합니다.',
            location: '공원',
            times: '늦은밤',
            days: '주말',
            headCount: 5,
            headCountStatus: 3,
            imgae: ['이미지URL1', '이미지URL2', '이미지URL3'],
            wishState: false,
        },
        {
            postId: 7,
            title: '농구 구합니다.',
            location: '공원',
            times: '늦은밤',
            days: '주말',
            headCount: 5,
            headCountStatus: 3,
            imgae: ['이미지URL1', '이미지URL2', '이미지URL3'],
            wishState: false,
        },
        {
            postId: 8,
            title: '농구 구합니다.',
            location: '공원',
            times: '늦은밤',
            days: '주말',
            headCount: 5,
            headCountStatus: 3,
            imgae: ['이미지URL1', '이미지URL2', '이미지URL3'],
            wishState: false,
        },
    ];
    return (
        <div className="MainLayout">
            <Silde />
            <MainContents data={data} />
        </div>
    );
};
