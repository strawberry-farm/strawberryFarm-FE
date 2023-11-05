import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [
            react(),
            createHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        mapClientId: env.VITE_KAKAO_MAP_API_KEY,
                    },
                },
            }),
        ],
    };
};
