import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import getAddr from '../../hooks/getAddr';
import AddressModal from '../@common/addressModal/AddressModal';
import useInput from '../../hooks/useInput';
import { writeState } from '../../atom/writeState';
import { useRecoilState } from 'recoil';
import axios from 'axios';
export const WritePerson = (props: {
    setView: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const titleValue = useInput('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const localDitleValue = useInput('');
    const [write, setWtite] = useRecoilState(writeState);
    const [addrData, setAddrData] = useState({
        bcode: '',
        addr: '',
        x: 0,
        y: 0,
    });

    const onNextOnclick = () => {
        setWtite({
            ...write,
            person: titleValue.value,
            local: {
                ...addrData,
                addrDitle: localDitleValue.value,
            },
        });
        //
        props.setView((prev) => prev + 1);
    };

    return (
        <>
            {isOpen && (
                <AddressModal
                    setOpen={setIsOpen}
                    children={
                        <DaumPostcode
                            style={{ background: '#ffffff' }}
                            onComplete={(e) => {
                                const addr = getAddr(e); // return 양식 postcode, address, extraAddress
                                const config = {
                                    headers: {
                                        Authorization: `KakaoAK 4df637243950672102c542c6c835cc93`,
                                    },
                                };
                                axios
                                    .get(
                                        `https://dapi.kakao.com/v2/local/search/address.json?query=` +
                                            addr.address,
                                        config,
                                    )
                                    .then((result: any) => {
                                        setAddrData({
                                            bcode: e.bcode,
                                            addr: addr.address,
                                            x: result.data.documents[0].x,
                                            y: result.data.documents[0].y,
                                        });
                                    });

                                setIsOpen(!isOpen);
                            }}
                        />
                    }
                />
            )}

            <div className="writeTitleLayout">
                <div className="title">
                    인원 및 장소 <span className="subTitle">(필수)</span>
                </div>
                <div className="personBox">
                    <div className="inputTitle">인원</div>
                    <div className="personInpBox">
                        <input
                            className="personInp"
                            placeholder="1"
                            {...titleValue}
                        />
                        <span>명</span>
                    </div>
                </div>
                <div className="local">
                    <div className="localTitle">장소</div>
                    <div
                        className="localBasic"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {addrData.addr || '주소를 입력해주세요(클릭)'}
                    </div>
                    <div className="localDitle">
                        <input
                            type="text"
                            placeholder="상세 주소를 입력해주세요."
                            disabled={false}
                            {...localDitleValue}
                        />
                    </div>
                </div>
                <div className="btnLayout">
                    <div
                        className="prevBtn"
                        onClick={() => props.setView((prev) => prev - 1)}
                    >
                        이전
                    </div>
                    <div className="nextBtn" onClick={onNextOnclick}>
                        다음
                    </div>
                </div>
            </div>
        </>
    );
};
