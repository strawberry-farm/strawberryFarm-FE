import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { imgProps } from './silde.interface';
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
    const silderData: imgProps[] = [
        { id: 1, name: '축구', imgSrc: 'images/thumbnail/soccer.png' },
        { id: 2, name: '산책', imgSrc: 'images/thumbnail/walk.png' },
        { id: 3, name: '요가', imgSrc: 'images/thumbnail/yoga.png' },
        { id: 4, name: '필라테스', imgSrc: 'images/thumbnail/pilates.png' },
        { id: 5, name: '헬스', imgSrc: 'images/thumbnail/health.png' },
        { id: 6, name: '자전거', imgSrc: 'images/thumbnail/bicycle.png' },
        { id: 7, name: '농구', imgSrc: 'images/thumbnail/basketball.png' },
        { id: 8, name: '배드민턴', imgSrc: 'images/thumbnail/badminton.png' },
    ];

    return (
        <div className="silderLayout">
            <Slider {...settings}>
                {silderData.map((item: imgProps) => {
                    return (
                        <div className="silderBox" key={item.id}>
                            <img src={item.imgSrc} alt="사진" />
                            <div>{item.name}</div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};
