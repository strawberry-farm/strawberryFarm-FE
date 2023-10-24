import { createProxyMiddleware } from 'http-proxy-middleware';
// eslint-disable-next-line no-undef
module.exports = function (app) {
    app.use(
        'proxy',
        createProxyMiddleware({
            target: 'https://strawberryfarm.shop',
            changeOrigin: true,
        }),
    );
};
