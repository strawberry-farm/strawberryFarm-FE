import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { imgProps } from './silde.interface';
import { queryKey } from '../../../queries/query-key';
import axios from '../../../Lib/Axios/index';
import { useQuery } from '@tanstack/react-query';
export const Silde = () => {
    const settings = {
        slide: 'div', // 태그 div로 보이기
        dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        infinite: true, //무한 반복 옵션
        speed: 500,
        useCSS: true,
        slidesToShow: 6, // 보여지는 화면수
        slidesToScroll: 1, // 넘겨지는 화면
        centerPadding: '0px',
        centerMode: false,
        autoplay: false, // 자동 스크롤 사용 여부
        autoplaySpeed: 2880, //스크롤 넘기는 시간x
        draggable: true, // 드래그 이벤트 막기
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
    };

    // const { data } = useQuery({
    //     queryKey: queryKey.field.all,
    //     queryFn: async () => axios.get('/field').then((res) => res.data),
    // });
    return (
        <div className="silderLayout">
            {/* <Slider {...settings}>
                {data.data.map((item: imgProps) => {
                    return (
                        <div className="silderBox" key={item.fieldId}>
                            <img src={item.image} alt="사진" />
                            <div>{item.fieldName}</div>
                        </div>
                    );
                })}
            </Slider> */}
        </div>
    );
};
