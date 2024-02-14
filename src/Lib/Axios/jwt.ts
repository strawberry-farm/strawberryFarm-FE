import jwt from 'jwt-simple';

export const decodeJWT = (token: string) => {
    try {
        // jwt-simple 라이브러리를 사용하여 디코딩
        return jwt.decode(token, '', true);
    } catch (error) {
        console.error('JWT decoding error:', error);
        return null;
    }
};

export const isTokenValidOrUndefined = (token: any) => {
    if (!token) return '토큰 없음';

    const decodedToken: any = decodeJWT(token);
    console.log(decodedToken, 'decodedToken');

    if (!decodedToken) return '토큰 디코딩 실패';

    const expirationTimeInSeconds = decodedToken.exp;
    const now = Math.floor(Date.now() / 1000);
    const isvalid = expirationTimeInSeconds >= now ? '토큰 유효' : '토큰 만료';
    console.log(isvalid,'isvalid');
    
    return isvalid;
};
