import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'https://strawberryfarm.shop', // 프록시할 대상 서버의 URL 입력
            changeOrigin: true,
        }),
    );
}
