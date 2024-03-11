// import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    // const navigator = useNavigate();
    return (
        <div className="footer">
            <div className="footerLayout">
                <div className="footerContent">
                    <div className="footerTilte">About</div>
                    <div className="footerTilte">FAQ</div>
                    <div className="footerTilte">팀원합류</div>
                    <div className="footerTilte">문의</div>
                </div>
                <div className="footerMain">혼자 보다 둘이서 하는게 좋다</div>
                <div className="footerEtc">
                    주식회사 딸기농장 | 대표자 최웅준 | 이메일
                    teacherung00@gmail.com
                    <br /> 주소지 디스코드 어딘가
                </div>
            </div>
        </div>
    );
};
