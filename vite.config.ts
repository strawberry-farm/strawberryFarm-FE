import react from '@vitejs/plugin-react'; // React 지원 플러그인
import { loadEnv } from 'vite'; // 환경 변수 로드 함수
import { createHtmlPlugin } from 'vite-plugin-html'; // HTML 생성 플러그인
import { nodePolyfills } from 'vite-plugin-node-polyfills'; // Node.js 폴리필 플러그인
import mkcert from 'vite-plugin-mkcert';
export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd()); // 환경 변수 로드

    return {
        optimizeDeps: {
            include: ['jwt-decode'], // jwt-decode 모듈을 최적화 대상에 포함
        },
        plugins: [
            mkcert(),
            // Node.js 폴리필 플러그인 설정
            nodePolyfills({
                include: ['path'], // 특정 폴리필만 추가할 경우 여기에 추가
                exclude: ['http','https'], // 제외할 폴리필 목록
                globals: {
                    Buffer: true,
                    global: true,
                    process: true,
                },
                overrides: {
                    fs: 'memfs', // fs 모듈을 memfs로 오버라이드
                },
                protocolImports: true, // node: 프로토콜 임포트 폴리필 적용 여부
            }),
        
            react(), // React 플러그인
            createHtmlPlugin({
                minify: true, // HTML 압축 여부
                inject: {
                    // HTML에 데이터 주입
                    data: {
                        mapClientId: env.VITE_KAKAO_MAP_API_KEY, // 환경 변수로부터 카카오 맵 API 키 주입
                    },
                },
            }),
        ],
    };
};

