/**
 * @param   data  다음 우편 번호 검색 결과<br />
 * @returns {object} {postcode:우편 번호, address:주소, extraAddress:참고주소}
 */
const getAddr = (data: any) => {
    let extraRoadAddr = '';
    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraRoadAddr += data.bname;
    }
    if (data.buildingName !== '' && data.apartment === 'Y') {
        extraRoadAddr +=
            extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName;
    }
    if (extraRoadAddr !== '') {
        extraRoadAddr = '(' + extraRoadAddr + ')';
    }
    return {
        postcode: data.zonecode,
        address: data.roadAddress,
        extraAddress: extraRoadAddr,
        bcode: data.bcode,
    };
};

export default getAddr;
